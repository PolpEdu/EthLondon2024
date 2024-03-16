"use client";

import {
    DynamicContextProvider,
    EthereumWalletConnectors,
    DynamicWagmiConnector,
    EthersExtension,
} from "@/lib/dynamic";

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

    return (
        <DynamicContextProvider
            settings={{
                environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID ?? "",
                walletConnectors: [EthereumWalletConnectors],
                walletConnectorExtensions: [EthersExtension],
                cssOverrides: cssOverrides

            }}
            
        >
            <DynamicWagmiConnector>
                {children}
            </DynamicWagmiConnector>
        </DynamicContextProvider>
    );
}