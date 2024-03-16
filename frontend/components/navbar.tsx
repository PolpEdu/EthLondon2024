"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import { DynamicWidget } from "../lib/dynamic";
import Icon from "@/public/images/icon";

export default function Navbar() {
    const pathname = usePathname();

    const links = [
        { route: '/', name: 'Home' },
        { route: '/about', name: 'About' },
        { route: '/swap', name: 'Swap' },
        { route: '/pools', name: 'Create Pool' },
    ];

    const isActive = (route: string) => {
        return pathname === route ? 'text-blue-600' : '';
    };

    return (
        <nav className='w-screen h-24 bg-white z-30 text-black px-10 py-4
        sticky top-0 left-0 
        flex flex-row
        justify-between items-center'>
            <Link href={links[0].route}>
                <Icon isNav={true} />
            </Link>
            <ul className='max-w-[50vw] flex flex-row gap-10'>
                {links.slice(0, links.length).map((link, index) => {
                    if (index !== 0) {
                        return (
                            <li key={index}>
                                <Link href={link.route}>
                                    <h5 className={`hover:text-blue-600 ${isActive(link.route)}`}>
                                        {link.name}
                                    </h5>
                                </Link>
                            </li>
                        );
                    }
                })}
            </ul>
            <DynamicWidget variant='dropdown'/>
        </nav>
    )
}