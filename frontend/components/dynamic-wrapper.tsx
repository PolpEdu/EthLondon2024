"use client";

import {
    DynamicContextProvider,
    EthereumWalletConnectors,
    DynamicWagmiConnector,
} from "@/lib/dynamic";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, createConfig } from "wagmi";
import { baseSepolia, localhost } from "viem/chains";
import { http } from "viem";


export default function ProviderWrapper({ children }: React.PropsWithChildren) {
    const cssOverrides = `
    .connect-button {
        background-color: #3b64eb;
        border: 0px;
        border-radius: 6px;
    }
    .connect-button span{
        color: white;
    }
      `
    const queryClient = new QueryClient();

    const evmNetworks = [
        {
            blockExplorerUrls: ['https://basescan.org/'],
            chainId: 84532,
            chainName: 'Base Sepolia',
            iconUrls: ['https://app.dynamic.xyz/assets/networks/base.svg'],
            name: 'Base Sepolia',
            nativeCurrency: {
                decimals: 18,
                name: 'Ether',
                symbol: 'ETH',
            },
            networkId: 84532,
            rpcUrls: ['https://base-sepolia.g.alchemy.com/v2/OOmlberYytpNtGTqYOodj7cad6bKdzWt'],
            vanityName: 'ETH Base Sepolia',
        },
        {
            blockExplorerUrls: [''],
            chainId: 16813125,
            chainName: 'Suave Chain',
            iconUrls: ['https://app.dynamic.xyz/assets/networks/base.svg'],
            name: 'Suave Chain',
            nativeCurrency: {
                decimals: 18,
                name: 'Ether',
                symbol: 'ETH',
            },
            networkId: 84532,
            rpcUrls: ['https://localhost:1234'],
            vanityName: 'Local Suave Rigil Chain',
        },
    ]


    const config = createConfig({
        chains: [baseSepolia, localhost],
        transports: {
            [baseSepolia.id]: http(),
            [localhost.id]: http(),
        },
    });
    return (
        <DynamicContextProvider
            settings={{
                environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID ?? "",
                walletConnectors: [EthereumWalletConnectors],
                cssOverrides: cssOverrides,
            }}
        >
            <WagmiProvider config={config}>
                <QueryClientProvider client={queryClient}>
                    <DynamicWagmiConnector>
                        {children}
                    </DynamicWagmiConnector>
                </QueryClientProvider>
            </WagmiProvider>
        </DynamicContextProvider>
    );
}