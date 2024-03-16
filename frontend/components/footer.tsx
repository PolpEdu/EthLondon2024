"use client"
import Link from "next/link"
import Image from "next/image"
import discord from "@/images/discord.svg"
import twitter from "@/images/twitter.svg"
import telegram from "@/images/telegram.svg"
import Icon from "@/public/images/icon";

export default function Footer() {

    interface Social {
        name: string;
        link: string;
        icon: string;
    }

    const socials: Social[] = [
        {
            name: "Twitter",
            link: "https://twitter.com/athosfinance",
            icon: twitter
        },
        {
            name: "Discord",
            link: "https://discord.gg/athos",
            icon: discord
        },
        {
            name: "Telegram",
            link: "https://t.me/athosfinance",
            icon: telegram
        }
    ]

    const size = 24;

    return (
        <footer className={` w-full h-24 bg-blue-600 
        px-10 py-8 text-white
        flex flex-row justify-between items-center`}>
            <div className="w-[20vw]">
                <Icon isNav={false} size={30}/>
            </div>
            <p>© 2024 Athos. All rights reserved.</p>
            <ul className="w-[20vw] flex flex-row gap-4 justify-end items-center">
                {socials.map((social, index) => (
                    <li key={index}>
                        <Link href={social.link} target="_blank">
                            <Image
                                src={social.icon}
                                alt={social.name}
                                height={size}
                                width={size}
                                className={`h-[${size}px] object-contain`}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </footer >
    )
}