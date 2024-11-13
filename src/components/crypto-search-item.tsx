import React from "react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

interface SearchItem {
  id?: string;
  name?: string;
  thumb?: string;
}

interface CryptoSearchItemProps {
  coin: SearchItem;
  onAddToWatchlist?: () => void;
}

export function CryptoSearchItem({
  coin,
  onAddToWatchlist,
}: CryptoSearchItemProps) {
  if (!coin) {
    return null;
  }

  const { id, name, thumb } = coin;

  return (
    <Card className="w-full max-w-sm hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <CardContent className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={thumb} alt={`${name} logo`} />
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
            <button
              onClick={onAddToWatchlist}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30`}
            >
              Add to Watchlist
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
