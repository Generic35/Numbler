import { useDynamic } from "@/hooks/use-dynamic";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wallet, LogOut, User } from "lucide-react";

export const WalletConnect = () => {
  const { isConnected, handleConnect, handleDisconnect, getWalletAddress, user } = useDynamic();

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  if (isConnected) {
    return (
      <div className="flex items-center gap-2">
        <Badge variant="secondary" className="flex items-center gap-1">
          <Wallet className="h-3 w-3" />
          {getWalletAddress() ? formatAddress(getWalletAddress()!) : "Connected"}
        </Badge>
        {user?.email && (
          <Badge variant="outline" className="flex items-center gap-1">
            <User className="h-3 w-3" />
            {user.email}
          </Badge>
        )}
        <Button
          variant="outline"
          size="sm"
          onClick={handleDisconnect}
          className="flex items-center gap-1"
        >
          <LogOut className="h-3 w-3" />
          Disconnect
        </Button>
      </div>
    );
  }

  return (
    <Button onClick={handleConnect} className="flex items-center gap-2">
      <Wallet className="h-4 w-4" />
      Connect Wallet
    </Button>
  );
}; 