import { Wallet, Signature, hexlify, randomBytes, verifyTypedData, JsonRpcProvider, AbiCoder, ethers } from "ethers";
const domain = {
	name: "HookManager",
	version: "1",
	chainId: 84532,
	verifyingContract: "0x020664b9f354c415a7D01dAa483CF78aFe02F66E",
};

const types = {
	Permit: [
		{ name: "amount", type: "int256" },
		{ name: "blockNumber", type: "uint256" },
		{ name: "nonce", type: "uint256" },
		{ name: "trustScore", type: "uint8" },
	],
};
const owner = new Wallet("0xff0f5f3e25717074f4465a5b168a59b8df626165558f006031d9131449350775");
const provider = new JsonRpcProvider("https://base-sepolia.g.alchemy.com/v2/OOmlberYytpNtGTqYOodj7cad6bKdzWt");
export async function signMessage(amount: number, nonce_used = 100) {
	const block = await provider.getBlockNumber();
	const message = {
		amount: amount.toString(),
		blockNumber: block + 100,
		nonce: nonce_used || hexlify(randomBytes(32)),
		trustScore: 0,
	};
	// create signer object with private key
	const signature = Signature.from(await owner.signTypedData(domain, types, message));
	// split signature into parts
	const r = signature.r;
	const s = signature.s;
	const v = signature.v;
	const recovered = verifyTypedData(domain, types, message, signature);
	// console.log("total", message, types, signature, domain);

	// make sure it matches owner
	if (recovered.toLowerCase() !== owner.address.toLowerCase()) {
		throw new Error("Invalid signature");
	}
	/*bytes memory data = abi.encode(
			amountSpecified,
			blockNumber,
			nonce,
			trustScore,
			v,
			r,
			s
		);*/
	const abiCoder = new ethers.AbiCoder();
	const bytes = abiCoder.encode(
		["int256", "uint256", "uint256", "uint8", "uint8", "bytes32", "bytes32"],
		[amount, message.blockNumber, message.nonce, message.trustScore, v, r, s]
	);

	return bytes;
}