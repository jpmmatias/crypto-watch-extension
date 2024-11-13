import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./popup.css";
import api from "../lib/api";
import "../index.css";
import { CryptoWatchlistItem } from "../components/crypto-watchlist-item";
import { CryptoSearchItem } from "../components/crypto-search-item";
import Loader from "@/components/loader";

interface Coin {
  id: string;
  name: string;
  image: {
    thumb: string;
    small: string;
  };
  market_data: {
    current_price: {
      usd: number;
    };
  };
}
interface SearchResponse {
  coins: Coin[];
}

const SearchList: React.FC<{
  coins: Coin[];
  onAddToWatchlist: (coin: Coin) => void;
}> = ({ coins, onAddToWatchlist }) => {
  return (
    <div>
      {coins.map((coin) => (
        <CryptoSearchItem
          coin={coin}
          onAddToWatchlist={() => onAddToWatchlist(coin)}
        />
      ))}
    </div>
  );
};

const App: React.FC<{}> = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [searchList, setSearchList] = useState<Coin[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [search, setSearch] = useState("");

  const clearSearch = () => {
    setLoading(false);
    setSearchList([]);
  };

  useEffect(() => {
    setLoading(true);
    if (search.trim().length > 0) {
      api
        .get<SearchResponse>(`/search?query=${search}`)
        .then((response) => {
          const { coins } = response.data as SearchResponse;
          setSearchList(coins);
        })
        .catch((error) => {
          console.error({ error });
        })
        .finally(() => {
          setLoading(false);
        });
    }
    if (search.trim().length === 0) {
      clearSearch();
    }
  }, [search]);
  console.log({ searchList });

  const fetchCoin = async (coinId: string) => {
    api.get<Coin>(`/coins/${coinId}`).then((response) => {
      const coin = response.data as Coin;
      setCoins((coins) => [...coins, coin]);
    });
  };

  const onAddToWatchlist = (coin: Coin) => {
    setLoading(true);
    fetchCoin(coin.id).then(() => {
      setSearch("");
      setLoading(false);
    });
  };

  const onRemoveFromWatchlist = (coin: Coin) => {
    setCoins((coins) => coins.filter((c) => c.id !== coin.id));
  };

  return (
    <div className="p-4 min-w-[400px] flex flex-col items-center gap-4 justify-center">
      <h1 className="text-2xl font-bold text-center mb-4">Crypto Watchlist</h1>
      <div>
        <div className="flex gap-2">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search for a coin"
            className="w-full p-2 rounded-md border border-gray-300"
          />
          <button
            onClick={() => setSearch("")}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Clear
          </button>
        </div>
      </div>
      {searchList.length > 0 && (
        <SearchList
          coins={searchList}
          onAddToWatchlist={(coin) => onAddToWatchlist(coin)}
        />
      )}
      {loading && <Loader />}
      {coins.length > 0 &&
        search.trim().length === 0 &&
        coins.map((coin) => (
          <CryptoWatchlistItem
            coin={coin}
            onRemoveFromWatchlist={() => onRemoveFromWatchlist(coin)}
          />
        ))}
    </div>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
