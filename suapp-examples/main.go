package main

import (
	"encoding/hex"
	"fmt"
	"io"
	"log"
	"math/big"
	"net/http"
	"strings"

	"github.com/ethereum/go-ethereum/accounts/abi"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/ethereum/go-ethereum/crypto"
	"github.com/flashbots/suapp-examples/framework"
)

const (
	// Deployment specific
	PRIV_KEY       = "ff0f5f3e25717074f4465a5b168a59b8df626165558f006031d9131449350775" // FILL IN TO RUN EXAMPLE
	SCAN_KEY       = "P84E29Y59VAGPVSKG4G63XAQR1P62YJMDS"
	ETH_CHAIN_ID   = 5
	NFTEE_TOKEN_ID = 1
)

func main() {
	// create private key to be used on SUAVE and Eth L1
	privKey := framework.NewPrivKeyFromHex(PRIV_KEY)
	fmt.Printf("SUAVE Signer Address: %s\n", privKey.Address())
	//print privkey
	fmt.Printf("Private Key: %s\n", hex.EncodeToString(crypto.FromECDSA(privKey.Priv)))

	// Deploy SUAVE L1 Contract
	suaveContractAddress, suaveTxHash, signature := deploySuaveContract(privKey)

	fmt.Println("signature: ", hex.EncodeToString(signature))
	fmt.Printf("SUAVE Contract deployed at: %s\n", suaveContractAddress.Hex())
	fmt.Printf("SUAVE Transaction Hash: %s\n", suaveTxHash.Hex())
	hash := crypto.Keccak256([]byte("Permit(int256 amount,uint256 blockNumber,uint256 nonce,uint8 trustScore)"))
	fmt.Printf("Hash: %s\n", hex.EncodeToString(hash))

	// ecrecover the signer address from the signature
	signer, err := crypto.Ecrecover([]byte(hash), signature)
	if err != nil {
		log.Fatalf("Error recovering signer: %v", err)
	}
	fmt.Printf("Recovered signer: %s\n", common.BytesToAddress(signer).Hex())

}

func deploySuaveContract(privKey *framework.PrivKey) (common.Address, common.Hash, []byte) {
	relayerURL := "localhost:1234"
	go func() {
		log.Fatal(http.ListenAndServe(relayerURL, &relayHandlerExample{}))
	}()

	fr := framework.New()
	contract := fr.Suave.DeployContract("712Emitter.sol/Emitter.json")

	addr := privKey.Address()
	fundBalance := big.NewInt(100000000000000000)
	fr.Suave.FundAccount(addr, fundBalance)

	contractAddr := contract.Ref(privKey)
	skHex := hex.EncodeToString(crypto.FromECDSA(privKey.Priv))

	_ = contractAddr.SendConfidentialRequest("updatePrivateKey", nil, []byte(skHex))
	_ = contractAddr.SendConfidentialRequest("updateApiKey", nil, []byte(SCAN_KEY))

	// //Call signL1MintApproval and compare signatures
	// receipt := contractAddr.SendConfidentialRequest("signL1SwapApproval", []any{big.NewInt(0), big.NewInt(9430107)}, nil)

	// // Extract the signature from SUAVE transaction logs
	// var signature []byte
	// if len(receipt.Logs) > 0 {
	// 	nfteeApprovalEvent := &NFTEEApproval{}
	// 	if err := nfteeApprovalEvent.Unpack(receipt.Logs[0]); err != nil {
	// 		log.Fatalf("Error unpacking logs: %v", err)
	// 	}
	// 	signature = nfteeApprovalEvent.SignedMessage
	// }

	//address_string := "0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC"
	//conver to address
	//address := common.HexToAddress(address_string)
	//transform scan key to bytes

	receipt := contractAddr.SendConfidentialRequest("checkTrust", []any{addr, []byte(SCAN_KEY)}, nil)
	if len(receipt.Logs) > 0 {
		responseEvent := &NFTEEApproval{}
		if err := responseEvent.Unpack(receipt.Logs[0]); err != nil {
			log.Fatalf("Error unpacking logs: %v", err)
		}
		fmt.Printf("Response: %s\n", responseEvent.SignedMessage)
	}

	return contractAddr.Raw().Address(), receipt.TxHash, []byte{}
}

// NFTEEApprovalEventABI is the ABI of the NFTEEApproval event.
var NFTEEApprovalEventABI = `[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes","name":"signedMessage","type":"bytes"}],"name":"Approval","type":"event"}]`

type NFTEEApproval struct {
	SignedMessage []byte
}

func (na *NFTEEApproval) Unpack(log *types.Log) error {
	eventABI, err := abi.JSON(strings.NewReader(NFTEEApprovalEventABI))
	if err != nil {
		return err
	}

	return eventABI.UnpackIntoInterface(na, "Approval", log.Data)
}

type relayHandlerExample struct {
}

func (rl *relayHandlerExample) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	bodyBytes, err := io.ReadAll(r.Body)
	if err != nil {
		panic(err)
	}

	fmt.Println(string(bodyBytes))
}
