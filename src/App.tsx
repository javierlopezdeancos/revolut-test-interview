import './styles.css';
import useUserHook from './use-user-hook';
import useTransactionsHook from './use-transactions-hook';

export default function App() {
  const { user, loading: userIsLoading } = useUserHook();

  const { transactions, loading: transactionsIsLoading } =
    useTransactionsHook();

  const TransactionsItems = () =>
    transactions?.map((transaction) => (
      <li key={transaction.id}>
        {transaction.description} {transaction.amount}
      </li>
    ));

  return (
    <div className="App">
      <h1>Awesome Bank</h1>
      {user && !userIsLoading ? (
        <p>Hey I am {user?.firstName}</p>
      ) : (
        <p>loading user... </p>
      )}
      {transactions && !transactionsIsLoading ? (
        <ul>{TransactionsItems()}</ul>
      ) : (
        <p>loading transactions... </p>
      )}
    </div>
  );
}
