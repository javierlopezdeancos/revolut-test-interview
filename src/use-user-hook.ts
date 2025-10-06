import { useState, useEffect } from 'react';
import type User from './user';
import getUserApi from './get-user-api';

const useUserHook = (): {
  loading: boolean;
  error: Error | null;
  user: User;
} => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (user) {
      return;
    }

    setLoading(true);

    getUserApi()
      .then((u) => {
        if (!u) {
          console.error('There is an error trying to get user from api');
          setError(new Error('There is an error trying to get user from api'));
          return;
        }

        setUser(u);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user]);

  return {
    loading,
    error,
    user,
  };
};

export default useUserHook;
