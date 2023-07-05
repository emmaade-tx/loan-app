import { useState, useEffect } from 'react';
import { fetchUsers } from '../api';

export const useFetchUsers = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await fetchUsers();
        setData(users);
        setLoading(false);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, data, error };
};
