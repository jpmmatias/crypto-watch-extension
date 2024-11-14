import { useWatchlist } from "@/hooks/useWatchList";
import React from "react";
import ReactDOM from "react-dom";
import { CryptoWatchlistItemContent } from "./watch-list-item";

const App: React.FC = () => {
  const { coins } = useWatchlist();

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      zIndex: '9999',
      background: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
     {coins.length > 0 ? (
        coins.map((coin) => (
            <CryptoWatchlistItemContent key={coin.id} coin={coin} />
        ))
     ) : (
        <p>Your watchlist is empty</p>
     )}
    </div>
  );
};

const init = () => {
  const root = document.createElement("div");
  root.id = "chrome-extension-root";
  document.body.appendChild(root);

 

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    root
  );
};

// Make sure the DOM is ready before injecting
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
