"use client"
import Image from "next/image";
import RateWallet from "@/components/rate-wallet";
import hero from "@/images/hero.svg";


export default function Home() {

  return (
    <main className="flex-1 h-full w-full p-16
    flex flex-row gap-10
    items-center justify-between">

      <div className="h-full w-[40%] flex flex-col gap-16 justify-center items-center">
        <div className="flex flex-col gap-4">
          <h1>Rate a wallet</h1>
          <p>Make informed decisions. <br />
            Connect your wallet for a custom risk analysis, or explore the reputation of others.</p>
        </div>
        <RateWallet />

      </div>
      <div className="h-fit w-[50%] flex flex-row">
        <Image
          src={hero}
          alt="hero-image"
          width={500}
          height={500}
          className=""
        />
      </div>
    </main>
  );
}
