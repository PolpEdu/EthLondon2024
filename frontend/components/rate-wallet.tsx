"use client"
import { useState } from 'react'; // Step 1
import { useRouter } from 'next/navigation'
import { DynamicConnectButton, useDynamicContext } from "@/lib/dynamic";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner"

export default function rateWallet() {
    const [walletAddress, setWalletAddress] = useState(''); // Step 2
    const { primaryWallet } = useDynamicContext(); // Step 3
    const router = useRouter()

    const handleInputAddress = () => {
        // Ethereum address regex pattern
        const ethAddressRegex = /^0x[a-fA-F0-9]{40}$/;

        if (ethAddressRegex.test(walletAddress)) {
            toast("Valid Ethereum address", { description: walletAddress })
            // Add your logic here for a valid Ethereum address
            router.push(`/${walletAddress.toLowerCase()}`)
        } else {
            toast("Invalid Ethereum address", { description: walletAddress })
            // Handle invalid Ethereum address here, such as showing an error message to the user
        }

    };

    const shortenAddress = (address: string) => {
        return address.replace(/^(0x[a-fA-F0-9]{2})[a-fA-F0-9]+([a-fA-F0-9]{3})$/, '$1...$2');
    };

    const handleConnectedWallet = () => {
        // Add your logic here for a connected wallet
        // console.log("wallet: ", primaryWallet)
        router.push(`/${primaryWallet?.address}`)
    }

    return (
        <div className="w-full
        flex flex-col gap-6
         justify-center items-center">

            <div className="w-full flex flex-col gap-2 justify-center items-start">

                <Input
                    type="wallet"
                    placeholder="Insert the wallet address you want to rate"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                />
                <p className="text-slate-500 text-sm">Ethereum/EVM wallet address only</p>

            </div>

            <div className="w-full flex flex-row gap-4
          justify-start items-center">
                <Button
                    disabled={!walletAddress}
                    className={walletAddress ? "bg-blue-500 hover:bg-blue-700" : "bg-slate-600 cursor-not-allowed"}
                    onClick={handleInputAddress}
                >
                    Rate Wallet
                </Button>

                {primaryWallet ? (<p>or select your wallet</p>) : (<p>or</p>)}

                {primaryWallet ? (
                    <Button
                        onClick={handleConnectedWallet}
                    > {shortenAddress(primaryWallet.address)}</Button>
                ) : (
                    <DynamicConnectButton>
                        <div data-testid='exampleChild' className="text-blue-600 font-medium hover:text-blue-400">
                            Connect your wallet
                        </div>
                    </DynamicConnectButton>
                )}
            </div>
        </div>
    )
}