"use client"
import { useState } from 'react'; // Step 1
import { useRouter } from 'next/navigation'
import { useDynamicContext } from "@/lib/dynamic";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import RadialProgressBar from '@/components/radial-progress';
import rate1 from '@/images/rate-1.svg';
import rate2 from '@/images/rate-2.svg';
import rate3 from '@/images/rate-3.svg';
import rate4 from '@/images/rate-4.svg';
import rate5 from '@/images/rate-5.svg';

export interface RatingProps {
    fill: string,
    image: string,
    header: string,
    description: string
}

export default function rateWallet({ address }: { address: string }) {
    const { primaryWallet } = useDynamicContext(); // Step 3
    const router = useRouter()
    const progress = 18;

    console.log(primaryWallet)

    const shortenAddress = (address: string) => {
        return address.replace(/^(0x[a-fA-F0-9]{2})[a-fA-F0-9]+([a-fA-F0-9]{3})$/, '$1...$2');
    };

    const images: string[] = [rate1, rate2, rate3, rate4, rate5]

    const ratingData: RatingProps[] = [
        {
            "fill": "red",
            "image": images[0],
            "header": "Crypto MVP! Your wallet is a masterclass in secure storage and savvy investing.",
            "description": "You recently interacted with: - compromised addresses - suspicious chain activity - crypto tumblers"
        },
        {
            "fill": "orange",
            "image": images[1],
            "header": "Solid score! You're making smart choices!",
            "description": "We noticed some: - risky clicks - potential security vulnerabilities"
        },
        {
            "fill": "yellow",
            "image": images[2],
            "header": "Level Up! You're on the path to crypto mastery…",
            "description": "Keep an eye on: - diversifying your holdings - using a hardware wallet for extra security"
        },
        {
            "fill": "light green",
            "image": images[3],
            "header": "Whoa there, cowboy! Slow down on the risky clicks...",
            "description": "Maintain these good habits: - two-factor authentication - strong passwords"
        },
        {
            "fill": "green",
            "image": images[4],
            "header": "Oh no! It seems like you have been engaging with some dark magic…",
            "description": "Keep shining!"
        }
    ];

    const getRatingProps = (progress: number) => {
        if (progress >= 90) return ratingData[4]
        if (progress >= 75) return ratingData[3]
        if (progress >= 50) return ratingData[2]
        if (progress >= 25) return ratingData[1]
        return ratingData[0]
    }

    let props: RatingProps = getRatingProps(progress);

    // const pfp = await fetch("").then(res => res.json())
    // console.log(pfp)

    return (
        <section className="grid grid-cols-3 grid-rows-2 gap-6">
            <div className='w-full min-h-[240px] relative
            flex flex-col justify-center items-center gap-4
            row-start-1 row-span-2 col-start-1 col-span-1'>

                <h1 className=''>{progress}</h1>
                <Image
                    src={props.image}
                    alt="rating-picture"
                    height={130}
                    width={120}
                    className='object-center h-24'
                />

                <RadialProgressBar className='absolute object-center' progress={progress} fill={props.fill} />

            </div>
            <div className="row-start-1 row-span-1 
            col-start-2 col-span-2
            flex flex-col gap-4">
                <div className='flex flex-row gap-3
                justify-start items-center'>

                    <Image
                        src=""
                        alt="profile-picture"
                        height={40}
                        width={40}
                        className='rounded-full'
                    />
                    <h3>@polpedu.eth</h3>
                    <Link href={`https://etherscan.io/address/${address}`}
                        className=''>
                        <Button className='text-gray-600 hover:text-white bg-transparent hover:bg-gray-400' >{shortenAddress(address)}</Button>
                    </Link>

                </div>
                <p className='text-sm font-bold'>Account Age: <span className='font-normal'>Recent (first transaction: 2 weeks ago)</span></p>
            </div>
            <div className="row-start-2 row-span-1 
            col-start-2 col-span-2">
                <h4>
                    Oh no! It seems like you have been engaging with some dark magic...
                </h4>
                <p>
                    You recently interacted with:
                    compromised addresses
                    suspition chain activity
                    crypto tumblers
                </p>
            </div>
        </section>
    )
}