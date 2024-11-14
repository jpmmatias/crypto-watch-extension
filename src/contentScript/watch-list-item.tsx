import React from "react";
import { Coin } from "@/models/Coin";
import  "@/styles/components.css";

interface CryptoWatchlistItemProps {
  coin: Coin;
}

export function CryptoWatchlistItemContent({ coin }: CryptoWatchlistItemProps) {
  if (!coin) {
    return null;
  }

  const { name, image, market_data } = coin;

  return (
    <div className="crypto-card">
      <div className="crypto-content">
        <div className="crypto-info">
          <div className="crypto-avatar">
            {image?.small ? (
              <img src={image.small} alt={`${name} logo`} />
            ) : (
              <div className="avatar-fallback">
                {name?.substring(0, 2).toUpperCase() || "NA"}
              </div>
            )}
          </div>
          <div className="crypto-details">
            <h3>{name || "Unknown"}</h3>
          </div>
        </div>
        <div className="price-container">
          <p className="price">
            ${market_data?.current_price?.usd?.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }) || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}