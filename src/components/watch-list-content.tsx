import React from "react";
import { CryptoWatchlistItem } from "./crypto-watchlist-item";
import { WatchListEmpty } from "./watch-list-empty";
import { Coin } from "@/models/Coin";

interface WatchlistContentProps {
    coins: Coin[];
    onRemove: (id: string) => void;
  }
  
export const WatchlistContent: React.FC<WatchlistContentProps> = ({ coins, onRemove }) => {
    if (coins.length === 0) {
      return <WatchListEmpty />;
    }
  
    return (
      <>
        {coins.map((coin) => (
          <CryptoWatchlistItem
            key={coin.id}
            coin={coin}
            onRemoveFromWatchlist={() => onRemove(coin.id)}
          />
        ))}
      </>
    );
  };