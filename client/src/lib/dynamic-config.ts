import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

export const dynamicConfig = {
  environmentId: "REPLACE-WITH-YOUR-ENVIRONMENT-ID",
  walletConnectors: [EthereumWalletConnectors],
  settings: {
    walletList: ["metamask", "walletconnect", "coinbase"],
    eventsCallbacks: {
      onAuthSuccess: (args: any) => {
        console.log("User authenticated successfully:", args);
      },
      onAuthError: (args: any) => {
        console.error("Authentication error:", args);
      },
    },
  },
}; 