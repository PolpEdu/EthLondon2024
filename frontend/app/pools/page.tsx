import Swap from "@/components/swap";

export default function Pools() {
	return (
		<main className="flex-1 h-full w-full px-10
      flex flex-col gap-10 items-center justify-center">
			<div className="w-full flex flex-col gap-4
       justify-center items-start">
				<h2 >Pools</h2>
				<p>Make informed decisions. <br />Connect your wallet for a custom risk analysis, or explore the reputation of others.</p>
			</div>
			<Swap />
		</main>
	);
}
