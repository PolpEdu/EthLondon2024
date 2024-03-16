import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Heatmap from "@/components/heatmap"
import Profile from "@/components/rate-profile"
import Transactions from "@/components/transactions"

export default function AddressRate({ params }: { params: { address: string } }) {

    

    return (
        <div className="flex-1 h-full w-full relative">
            <Link href={"/"} className="absolute mt-4 ml-10 
            flex flex-row gap-2 justify-center items-center
            cursor-pointer text-blue-600 font-medium">
                <ArrowLeft />
                Rate other wallet
            </Link>
            <main className="w-full h-full p-20 gap-16
            flex flex-col justify-center items-center">

                <Profile address={params.address} />
                <section className="w-full h-full
            flex flex-col justify-center items-start">

                    <h2>Past Transactions</h2>
                    {/* <Heatmap /> */}
                    <Transactions />

                </section>
            </main>
        </div>
    )
}