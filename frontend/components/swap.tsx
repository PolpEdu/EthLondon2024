"use client"
import React from "react";
import Image from "next/image";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FuelIcon } from "lucide-react";
import TipInfo from "./tool-tip-info";

const Tokens = [
    {
        name: "DAI",
        address: "0x6b175474e89094c44da98b954eedeac495271d0f",
        image: "",
    },
    {
        name: "USDC",
        address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        image: "",
    },
    {
        name: "USDT",
        address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
        image: "",
    },
];

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
                        <SelectValue placeholder="Token" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup className="gap-6">
                            {tokens.map((token, index) => {
                                return (
                                    <SelectItem
                                        value={token.name}
                                        key={index}
                                        className="w-full flex flex-row gap-2 justify-center items-center"
                                    >
                                        <Image
                                            src={token.image}
                                            alt="token-image"
                                            height={50}
                                            width={50}
                                        />
                                        {token.name}
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
    const [progress, setProgress] = React.useState(90);


    // const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     // Update the progress state with the new value from the slider
    //     setProgress(parseInt(event.target.value, 10));
    // };

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProgress(parseInt(event.target.value, 10));
    };

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
