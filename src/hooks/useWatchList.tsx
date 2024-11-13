import { useState, useCallback } from 'react';
import { Coin } from '@/models/Coin';
import api from '../lib/api';

export const useWatchlist = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchCoin = useCallback(async (coinId: string) => {
    setLoading(true);
    try {
      const response = await api.get<Coin>(`/coins/${coinId}`);
      setCoins((prev) => [...prev, response.data]);
    } catch (error) {
      console.error('Failed to fetch coin:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const removeCoin = useCallback((coinId: string) => {
    setCoins((prev) => prev.filter((c) => c.id !== coinId));
  }, []);

  return { coins, loading, fetchCoin, removeCoin };
};