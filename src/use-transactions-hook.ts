import { useState, useEffect } from 'react';
import type Transaction from './transaction';
import getTransactionsApi from './get-transactions-api';

const useTransactionsHook = (): {
  loading: boolean;
  error: Error | null;
  transactions: Transaction[];
} => {
  const [transactions, setTransactions] = useState<Transaction[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (transactions) {
      return;
    }

    setLoading(true);

    getTransactionsApi()
      .then((t) => {
        if (!t) {
          console.error('There is an error trying to get user from api');
          setError(new Error('There is an error trying to get user from api'));
          return;
        }

        setTransactions(t);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [transactions]);

  return {
    loading,
    error,
    transactions,
  };
};

export default useTransactionsHook;
