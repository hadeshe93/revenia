import { useState } from 'react';
import { fetchService } from '@/lib/fetch';

export function useFetch() {
  const [loading, setLoading] = useState(false);

  const fetch = async (url: string, options: RequestInit) => {
    setLoading(true);
    const result = await fetchService(url, options);
    setLoading(false);
    return result;
  }

  return {
    loading,
    fetch,
  };
}
