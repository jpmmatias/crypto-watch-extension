import { useState, useCallback, useEffect } from 'react';
import { Coin } from '@/models/Coin';
import api from '../lib/api';
import { getStoredCoins, removeStoredCoin, setStoredCoin } from '@/lib/storage';

export const useWatchlist = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getStoredCoins().then(setCoins);
  }, []);

  const fetchCoin = useCallback(async (coinId: string) => {
    setLoading(true);
    try {
      const response = await api.get<Coin>(`/coins/${coinId}`);
    
      setCoins((prev) => [...prev, response.data]);
      setStoredCoin(response.data);
    } catch (error) {
      console.error('Failed to fetch coin:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const removeCoin = useCallback(async (coinId: string) => {
    setCoins((prev) => prev.filter((c) => c.id !== coinId));
    await removeStoredCoin(coinId);
  }, []);

  return { coins, loading, fetchCoin, removeCoin };
};