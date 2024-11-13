export interface LocalStorage {
  getItem: (key: string) => Promise<string | null>;
  setItem: (key: string, value: string) => Promise<void>;
}

export function setStoredWatchlist(watchlist: Coin[]): LocalStorage {
  return {
    getItem: async (key: string) => {
      return localStorage.getItem(key);
    },
  };
}
