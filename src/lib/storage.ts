import { Coin } from "@/models/Coin";

export interface LocalStorage {
  coins: Coin[];
}

export type LocalStorageKeys = keyof LocalStorage;

export const setStoredCoin = (coin: Coin): Promise<void> => {
  return new Promise((resolve) => {
    getStoredCoins().then((coins) => {
      chrome.storage.local.set({ coins: [...coins, coin] }, () => {
        resolve();
      });
    });
  });
};

export const getStoredCoins = (): Promise<Coin[]> => {
  return new Promise((resolve) => {
    chrome.storage.local.get("coins", (result) => {
      resolve(result.coins || []);
    });
  });
};

export const removeStoredCoin = (coinId: string): Promise<void> => {
  return new Promise((resolve) => {
    getStoredCoins().then((coins) => {
      const existingCoins = coins.filter((c) => c.id !== coinId);
      chrome.storage.local.set({ coins: existingCoins }, () => {
        resolve();
      });
    });
  });
};
