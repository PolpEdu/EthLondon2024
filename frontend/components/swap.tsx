"use client"
import React, { useState } from "react";
import Image from "next/image";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FuelIcon } from "lucide-react";
import TipInfo from "./tool-tip-info";
import { BLANK_TOKEN, MAX_SQRT_PRICE_LIMIT, MAX_UINT, MIN_SQRT_PRICE_LIMIT, poolSwapTestABI, useErc20Allowance, useErc20Approve, usePoolSwapTestSwap } from "@/utils/utils";
import { parseEther } from "viem";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { signMessage } from "@/utils/sign";
import {
    useAccount,
    useContractWrite,
    useWriteContract,
} from 'wagmi';

const Tokens = [
    {
        name: "Athoos TOKEN",
        address: "0x0844B1EC6ee5E2F575Aa55724057721b9cd30e80",
        image: "https://cryptologos.cc/logos/apecoin-ape-ape-logo.svg",
    },
    {
        name: "ETH",
        address: "0x0844B1EC6ee5E2F575Aa55724057721b9cd30e80",
        image: "https://app.dynamic.xyz/assets/networks/eth.svg",
    },
    {
        name: "USDC",
        address: "0x19544eafF5959f228D2d76dF1570B220121518A8",
        image: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg",
    },
];

const swapRouterAddress = "0xd962b16F4ec712D705106674E944B04614F077be";

function TokenInput({ message, tokens }: { message: string, tokens: { name: string, address: string, image: string }[] }) {
    return (
        <div className="w-full border border-slate-300
        flex flex-col gap-1 p-4 rounded-md">
            <p className="w-full text-start text-slate-500">{message}</p>
            <div className="w-full flex flex-row gap-6 items-center">

                <Input
                    type="text"
                    placeholder="0.0"
                    className="token-number w-full p-0 text-black font-bold font-2xl
                    active:outline-none
                    border-0 outline-none"
                />
                <Select >
                    <SelectTrigger className="border-blue-600">
                        <SelectValue placeholder="Select token" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup className="gap-6">
                            {tokens.map((token, index) => {
                                return (
                                    <SelectItem
                                        value={token.name}
                                        key={index}
                                    >
                                        <div className="flex flex-row gap-2 items-center">
                                            <Image
                                                src={token.image}
                                                alt="token-image"
                                                height={35}
                                                width={35}
                                            />
                                            <div>{token.name}</div>
                                        </div>
                                    </SelectItem>
                                );

                            })}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="text-slate-500 w-full flex flex-row justify-between items-center">
                <p>1802,20 $</p>
                <p>Balance: 0</p>
            </div>
        </div>
    )
}

export default function Swap() {
    const [progress, setProgress] = useState(90);
    //swap status
    const [isSwapping, setIsSwapping] = useState(false);
    const [swapError, setSwapError] = useState("");
    const [swapSuccess, setSwapSuccess] = useState(false);

    const [fromCurrency, setFromCurrency] = useState('0x0844B1EC6ee5E2F575Aa55724057721b9cd30e80');
    const [toCurrency, setToCurrency] = useState('0x19544eafF5959f228D2d76dF1570B220121518A8');
    const [fromAmount, setFromAmount] = useState("");

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProgress(parseInt(event.target.value, 10));
    };

    const { address } = useAccount();

    const fromTokenAllowance = useErc20Allowance({
        address: fromCurrency,
        args: [address ?? "0x0", swapRouterAddress],
    });

    const tokenApprove = useErc20Approve({
        address: fromCurrency,
        args: [swapRouterAddress, MAX_UINT],
    });
    const [swapFee, setSwapFee] = useState(3000);
    const [tickSpacing, setTickSpacing] = useState(60);
    const [hookData, setHookData] = useState<string>(""); // New state for custom hook data
    const [hookAddress, setHookAddress] = useState<`0x${string}`>(
        '0x020664b9f354c415a7D01dAa483CF78aFe02F66E'
    );

    const { config } = useWriteContract({
        args: [
            {
                currency0: fromCurrency.toLowerCase() < toCurrency.toLowerCase() ? fromCurrency : toCurrency,
                currency1: fromCurrency.toLowerCase() < toCurrency.toLowerCase() ? toCurrency : fromCurrency,
                fee: Number(swapFee),
                tickSpacing: Number(tickSpacing),
                hooks: hookAddress,
            },
            {
                zeroForOne: fromCurrency.toLowerCase() < toCurrency.toLowerCase(),
                amountSpecified: parseEther("50"),
                sqrtPriceLimitX96:
                    fromCurrency.toLowerCase() < toCurrency.toLowerCase() ? MIN_SQRT_PRICE_LIMIT : MAX_SQRT_PRICE_LIMIT, // unlimited impact
            },
            {
                withdrawTokens: true,
                settleUsingTransfer: true,
                currencyAlreadySent: false
            },
            hookData as `0x${string}`,
        ],
        address: '0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e' as `0x${string}`,
        abi: poolSwapTestABI,
        functionName: 'swap',
    });
    const { data, write } = useContractWrite(config);


    const handleSwap = async () => {
        setIsSwapping(true);
        setSwapError("");
        setSwapSuccess(false);
        const hookdata = await signMessage(50);

        setHookData(hookdata);
        write();
    };

    const { walletConnector } = useDynamicContext();

    async function switchnetwork() {
        if (!walletConnector) {
            console.error("Wallet connector not found");
            return;
        }
        if (walletConnector.supportsNetworkSwitching()) {
            await walletConnector.switchNetwork({ networkChainId: 137 });
            console.log("Success! Network switched");
        }
    }



    return (
        <form className="h-fit w-[30rem]
            flex flex-col gap-2
            items-center justify-center"
        >
            <div className="w-full 
            flex flex-col gap-1 justify-center items-start">
                <div className="w-full flex flex-row justify-between items-center">
                    <p className="text-slate-800 font-medium">Minimum score to swap</p>
                    <TipInfo
                        title="Minimum Score to Swap"
                        message="Set a minimum wallet score requirement for your trades. 
                        This helps ensure the counterparty has strong security practices, potentially reducing transaction risk."
                    />
                </div>
                <div className="w-full flex flex-row gap-2 justify-center items-center">

                    {/* <style jsx>{`

                        input[type = 'range'] {
                            overflow: hidden;
                            -webkit-appearance: none;
                            border-radius: 40px;
                            background-color: rgba(241, 245, 249, 1);
                            z-index: 0;
                        }
                        
                        input[type='range']::-webkit-slider-runnable-track {
                            height: 10px;
                            -webkit-appearance: none;
                            color: linear-gradient(90deg, #DC263D 0%, #EB7935 30.74%, #FDE047 68.63%, #BFD62E 106.52%, #84CC16 142.98%);
                            margin-top: -1px;
                            z-index: 1;

                        }

                        input[type='range']::-webkit-slider-thumb {
                            width: 10px;
                            -webkit-appearance: none;
                            height: 10px;
                            cursor: ew-resize;
                        }
                    `}</style> */}

                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={progress}
                        onChange={handleSliderChange}
                        className="slider w-full" // Apply your styling classes here
                    />
                    <output className="w-10 flex justify-end items-center">{progress}</output>
                </div>
            </div >
            <TokenInput message="You pay" tokens={Tokens} />
            <TokenInput message="You receive" tokens={Tokens} />

            <Button
                type="submit"
                className="w-full bg-blue-600 text-white
                font-medium text-xl"
                onClick={handleSwap}
            >
                Swap tokens
            </Button>

            <div className="w-full h-fit
            flex flex-row justify-between items-center">
                <p className="text-slate-500">1 ARB = 0,00049 ETH <span className="text-slate-400">(1,76 $)</span></p>
                <div className="flex flex-row gap-2 justify-center items-center">
                    <FuelIcon />
                    <p>38,18$</p>
                </div>
            </div>


        </form >
    );
}
