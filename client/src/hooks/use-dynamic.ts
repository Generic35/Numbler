import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

export const useDynamic = () => {
  const {
    user,
    isLoggedIn,
    handleConnect,
    handleDisconnect,
    primaryWallet,
    setShowDynamicUserProfile,
    showDynamicUserProfile,
  } = useDynamicContext();

  return {
    user,
    isLoggedIn,
    handleConnect,
    handleDisconnect,
    primaryWallet,
    setShowDynamicUserProfile,
    showDynamicUserProfile,
    // Helper function to get user's wallet address
    getWalletAddress: () => primaryWallet?.address,
    // Helper function to check if user is connected
    isConnected: isLoggedIn,
  };
}; 