import React from "react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { X } from "lucide-react";

interface Coin {
  id?: string;
  name?: string;
  image?: {
    thumb?: string;
    small?: string;
  };
  market_data?: {
    current_price?: {
      usd?: number;
    };
  };
}

interface CryptoWatchlistItemProps {
  coin: Coin;
  onRemoveFromWatchlist?: () => void;
}

export function CryptoWatchlistItem({
  coin,
  onRemoveFromWatchlist,
}: CryptoWatchlistItemProps) {
  if (!coin) {
    return null;
  }

  const { id, name, image, market_data } = coin;

  return (
    <Card className="w-full max-w-sm hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <CardContent className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={image?.small} alt={`${name} logo`} />
            <AvatarFallback>
              {name?.substring(0, 2).toUpperCase() || "N/A"}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {name || "Unknown"}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {id || "N/A"}
            </p>
          </div>
        </div>
        <div className="flex  items-end gap-2">
          <div className="text-right">
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              $
              {market_data?.current_price?.usd?.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }) || "N/A"}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">USD</p>
          </div>
          <button
            onClick={onRemoveFromWatchlist}
            className="p-2 rounded-md transition-colors hover:bg-red-100 text-red-600 dark:hover:bg-red-900/20 dark:text-red-400"
            title="Remove from Watchlist"
          >
            <X size={20} />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
