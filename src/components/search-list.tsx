import React from "react";
import { CryptoSearchItem } from "./crypto-search-item";
import { CoinSearchResult } from "@/models/CoinSearchResult";

export const SearchList: React.FC<{
  coins: CoinSearchResult[];
  onAddToWatchlist: (coin: CoinSearchResult) => void;
}> = ({ coins, onAddToWatchlist }) => {
  if (coins.length === 0) {
    return <div>No results found</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      {coins.map((coin) => (
        <CryptoSearchItem
          coin={coin}
          onAddToWatchlist={() => onAddToWatchlist(coin)}
        />
      ))}
    </div>
  );
};
