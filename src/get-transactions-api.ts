import type Transaction from './transaction';

export default async function getTransactionsApi(): Promise<
  Transaction[] | undefined
> {
  let user: Transaction;

  return fetch('https://interview-mock-bank.revolut.com/api/transactions', {
    method: 'GET',
    headers: {
      'x-access-token':
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA1ZDg4MDlmLTA2Y2YtNDAyNS1hM2I5LTViNjFiMzcxZGQzMiIsImNyZWF0ZWREYXRlIjoxNzU5NzYzMDEwNDg0LCJmaXJzdE5hbWUiOiJJc2FiZWwiLCJsYXN0TmFtZSI6IkZsb3dlcnMiLCJzdGF0ZSI6IkFDVElWRSIsImliYW4iOiJHQjAwQkFSQzI3NTMxODUzNTk4NzY1IiwiYmFua05hbWUiOiJSZXZvbHV0Iiwic29ydENvZGUiOiJTb3J0IENvZGUiLCJhY2NvdW50TnVtYmVyIjoiNDI1MTU2MDkiLCJhZGRyZXNzIjoiOTM0NyBUaGUgR3JvdmUsIExvbmRvbiwgWU80NiA0VFAiLCJjdXJyZW5jeSI6IkdCUCIsImlhdCI6MTc1OTc2MzAxMCwiZXhwIjoxNzYwOTcyNjEwfQ.UQ5yO_0dxXzedZviiGTnxqLXtmzqMVc3OSykRDY4vKY',
    },
  })
    .then((res) => res.json())
    .then((user) => user)
    .catch((error) => console.error('Error:', error));
}
