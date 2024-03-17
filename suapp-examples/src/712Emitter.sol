import {Suave} from "suave-std/suavelib/Suave.sol";
import "forge-std/console.sol";
import "solady/utils/LibString.sol";
import {ChatGPT} from "../lib/suave-std/src/protocols/ChatGPT.sol";


contract Emitter {
    bytes32 private constant TYPEHASH = 0x6d92b67b70104c50317e36ab91aeb159d962207aa41e91ec9eadeb7e3d04cc32;
    bytes32 private constant DOMAIN_SEPARATOR = 0x07c5db21fddca4952bc7dee96ea945c5702afed160b9697111b37b16b1289b89;
    string private cstoreKey = "NFTEE:v0:PrivateKey";
    string private apistoreKey = "NFTEE:v0:APIKey";
    string private gptstoreKey = "NFTEE:v0:GPTKey";
    string private prompt = 'From now on you are an experienced web3 developer with experience in crypto security and compliance.  You will have to use your analytical skills to go through the data given, look for patterns and be able to categorize those.     Based on the following transactions, and all the following parameters/variables, give me a global rating from 0-100 on how trustfull, healthy and community contribution focused this wallet user is, dont hesitate to be harsh with the scoring, be honest.    These are the variables and things to take into account:  - account age  - Past transaction  - sketchy interactions in general (tornado cash, monero)  - how early this account trades in the blocks (MEV bots highly prefer the beginning due to front-running)  - Neighbor addresses  - amount and variety of assets (as well as their wallet time)     You should only return me the vaule, no other text, no yapping, be fact oriented.';

    // Private key variable
    Suave.DataId public privateKeyDataID;
    Suave.DataId public apiKeyDataID;
    address public owner;

    // Constructor to initialize owner
    constructor() {
        owner = msg.sender;
    }

    function getPrivateKeyDataIDBytes() public view returns (bytes16) {
        return Suave.DataId.unwrap(privateKeyDataID);
    }

    // function to fetch private key from confidential input portion of Confidential Compute Request
    function fetchConfidentialPrivateKey() public returns (bytes memory) {
        require(Suave.isConfidential());

        bytes memory confidentialInputs = Suave.confidentialInputs();
        return confidentialInputs;
    }

    event PrivateKeyUpdateEvent(Suave.DataId dataID);

    // setPrivateKey is the onchain portion of the Confidential Compute Request
    // inside we need to store our reference to our private key for future use
    // we must do this because updatePrivateKey() is offchain and can't directly store onchain without this
    function setPrivateKey(Suave.DataId dataID) public {
        privateKeyDataID = dataID;
        emit PrivateKeyUpdateEvent(dataID);
    }

    // offchain portion of Confidential Compute Request to update privateKey
    function updatePrivateKey() public returns (bytes memory) {
        require(Suave.isConfidential());

        bytes memory privateKey = this.fetchConfidentialPrivateKey();

        // create permissions for data record
        address[] memory peekers = new address[](1);
        peekers[0] = 0xC8df3686b4Afb2BB53e60EAe97EF043FE03Fb829;

        address[] memory allowedStores = new address[](1);
        allowedStores[0] = 0xC8df3686b4Afb2BB53e60EAe97EF043FE03Fb829; // using the wildcard address for allowedStores

        // store private key in conf data store
        Suave.DataRecord memory record = Suave.newDataRecord(
            0,
            peekers,
            allowedStores,
            cstoreKey
        );

        Suave.confidentialStore(record.id, cstoreKey, privateKey);

        // return calback to emit data ID onchain
        return bytes.concat(this.setPrivateKey.selector, abi.encode(record.id));
    }

    function setGPTKey(Suave.DataId dataID) public {
        gptstoreKey = dataID;
    }

    function updateGPTKey() public returns (bytes memory) {
        require(Suave.isConfidential());

        bytes memory gptKey = this.fetchConfidentialPrivateKey();

        // create permissions for data record
        address[] memory peekers = new address[](1);
        peekers[0] = 0xC8df3686b4Afb2BB53e60EAe97EF043FE03Fb829;

        address[] memory allowedStores = new address[](1);
        allowedStores[0] = 0xC8df3686b4Afb2BB53e60EAe97EF043FE03Fb829; // using the wildcard address for allowedStores

        // store private key in conf data store
        Suave.DataRecord memory record = Suave.newDataRecord(
            0,
            peekers,
            allowedStores,
            gptstoreKey
        );

        Suave.confidentialStore(record.id, gptstoreKey, gptKey);

        // return calback to emit data ID onchain
        return bytes.concat(this.setGPTKey.selector, abi.encode(record.id));
    }

    function setApiKey(Suave.DataId dataID) public {
        apiKeyDataID = dataID;
    }

    function updateApiKey() public returns (bytes memory) {
        require(Suave.isConfidential());

        bytes memory apiKey = this.fetchConfidentialPrivateKey();

        // create permissions for data record
        address[] memory peekers = new address[](1);
        peekers[0] = 0xC8df3686b4Afb2BB53e60EAe97EF043FE03Fb829;

        address[] memory allowedStores = new address[](1);
        allowedStores[0] = 0xC8df3686b4Afb2BB53e60EAe97EF043FE03Fb829; // using the wildcard address for allowedStores

        // store private key in conf data store
        Suave.DataRecord memory record = Suave.newDataRecord(
            0,
            peekers,
            allowedStores,
            apistoreKey
        );

        Suave.confidentialStore(record.id, apistoreKey, apiKey);

        // return calback to emit data ID onchain
        return bytes.concat(this.setApiKey.selector, abi.encode(record.id));
    }

    event Approval(bytes signedMessage);

    function emitSignedApproval(bytes memory sig) public {
        emit Approval(sig);
    }

    event TrustCheck(uint8 trustScore);

    function emitTrustCheck(uint8 trustScore) public {
        emit TrustCheck(trustScore);
    }   

    function checkTrust(address account, bytes memory apiKey) public returns (bytes memory) {
    
        //format string
        string memory url = string(abi.encodePacked("https://api-sepolia.basescan.org/api?module=account&action=txlist&address=", LibString.toHexStringChecksummed(account), "&startblock=0&endblock=latest&page=1&offset=2&sort=asc&apikey=", apiKey));

        console.log("-- url --");
        console.log(url);

        Suave.HttpRequest memory request;
         request.method = "POST";
         request.body = "";
         request.headers = new string[](1);
         request.headers[0] = "Content-Type: application/json";
         request.withFlashbotsSignature = false;
         request.url = url;

        bytes memory response = Suave.doHTTPRequest(request);

        console.log("-- response --");
        console.log(string(response));


        //we must do a algorithms to check the trust score
        //but for poc purpose we will resort to ChatGPT to generate a trust score
        ChatGPT.Message[] memory messages = new ChatGPT.Message[](1);
        messages[0].role = ChatGPT.Role.System;
        messages[0].content = string(abi.encodePacked(prompt, response));
        ChatGPT chatGPT = new ChatGPT(string(apiKey));
        string memory result = chatGPT.complete(messages);


        return abi.encodePacked(result);
    }

    

    // Function to sign and emit a signed EIP 712 digest for minting an NFTEE on L1
    function signL1SwapApproval(
        int256 amount,
        uint256 blockNumber
    ) public returns (bytes memory) {
        require(Suave.isConfidential());
        require(
            Suave.DataId.unwrap(privateKeyDataID) != bytes16(0),
            "private key is not set"
        );

        //fetch api key
        //recover uint8 from bytes concat
        bytes memory apiKey = Suave.confidentialRetrieve(apiKeyDataID, apistoreKey);

        bytes memory trustScore = checkTrust(msg.sender, apiKey);
        

        bytes memory digest = abi.encodePacked(
            keccak256(
                abi.encodePacked(
                    "\x19\x01",
                    keccak256(
                        abi.encode(TYPEHASH, amount, blockNumber, 80, trustScore)
                    )
                )
            )
        );

        bytes memory signerPrivateKey = Suave.confidentialRetrieve(
            privateKeyDataID,
            cstoreKey
        );

        bytes memory msgBytes = Suave.signMessage(
            digest,
            Suave.CryptoSignature.SECP256,
            string(signerPrivateKey)
        );

        return
            bytes.concat(
                this.emitSignedApproval.selector,
                abi.encode(msgBytes)
            );
    }
}
