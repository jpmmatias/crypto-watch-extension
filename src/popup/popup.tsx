import React from "react";
import ReactDOM from "react-dom";
import Loader from "@/components/loader";
import { useSearch } from "../hooks/useSearch";
import { SearchList } from "@/components/search-list";
import { useWatchlist } from "@/hooks/useWatchList";
import { SearchBar } from "@/components/search-bar";
import { WatchlistContent } from "@/components/watch-list-content";
import "@/index.css";
import "./popup.css";

const App: React.FC = () => {
  const {
    coins,
    loading: watchlistLoading,
    fetchCoin,
    removeCoin,
  } = useWatchlist();

  const {
    searchList,
    loading: searchLoading,
    search,
    setSearch,
  } = useSearch(coins);

  const isLoading = watchlistLoading || searchLoading;
  const shouldShowWatchlist = !search && !isLoading;
  const shouldShowSearchList = search && !isLoading;

  return (
    <div id="crypto-watchlist-chrome-extension-root-popup" className="p-4 min-w-[400px] flex flex-col items-center gap-4 justify-center">
      <h1 className="mb-4 text-2xl font-bold text-center">Crypto Watchlist</h1>

      <SearchBar value={search} onChange={setSearch} />

      {isLoading && <Loader />}

      {shouldShowSearchList && (
        <SearchList
          coins={searchList}
          onAddToWatchlist={(coin) => fetchCoin(coin.id)}
        />
      )}

      {shouldShowWatchlist && (
        <WatchlistContent coins={coins} onRemove={removeCoin} />
      )}
    </div>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
