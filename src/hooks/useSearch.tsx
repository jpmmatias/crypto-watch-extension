import { useState, useCallback, useEffect } from 'react';
import { Coin } from '@/models/Coin';
import api from '../lib/api';

export const useSearch = (watchlistCoins: Coin[]) => {
  const [searchList, setSearchList] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const fetchSearch = useCallback(async (query: string) => {
    setLoading(true);
    try {
      const response = await api.get<{ coins: Coin[] }>(`/search?query=${query}`);
      const filteredCoins = response.data.coins.filter(
        (coin) => !watchlistCoins.some((c) => c.id === coin.id)
      );
      setSearchList(filteredCoins);
    } catch (error) {
      console.error('Search failed:', error);
      setSearchList([]);
    } finally {
      setLoading(false);
    }
  }, [watchlistCoins]);

  useEffect(() => {
    if (search.trim()) {
      fetchSearch(search);
    } else {
      setSearchList([]);
      setLoading(false);
    }
  }, [search, fetchSearch]);

  return { searchList, loading, search, setSearch };
};