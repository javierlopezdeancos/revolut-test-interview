# Revoult Senior Front-end Engineer Test-interview

[Revolut.es](https://www.revolut.com/es-ES/)

## Access token

It is ok to hardcode accessToken in your app.

```text
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA1ZDg4MDlmLTA2Y2YtNDAyNS1hM2I5LTViNjFiMzcxZGQzMiIsImNyZWF0ZWREYXRlIjoxNzU5NzYzMDEwNDg0LCJmaXJzdE5hbWUiOiJJc2FiZWwiLCJsYXN0TmFtZSI6IkZsb3dlcnMiLCJzdGF0ZSI6IkFDVElWRSIsImliYW4iOiJHQjAwQkFSQzI3NTMxODUzNTk4NzY1IiwiYmFua05hbWUiOiJSZXZvbHV0Iiwic29ydENvZGUiOiJTb3J0IENvZGUiLCJhY2NvdW50TnVtYmVyIjoiNDI1MTU2MDkiLCJhZGRyZXNzIjoiOTM0NyBUaGUgR3JvdmUsIExvbmRvbiwgWU80NiA0VFAiLCJjdXJyZW5jeSI6IkdCUCIsImlhdCI6MTc1OTc2MzAxMCwiZXhwIjoxNzYwOTcyNjEwfQ.UQ5yO_0dxXzedZviiGTnxqLXtmzqMVc3OSykRDY4vKY"
```

## View user data

### New endpoint

**GET** `https://interview-mock-bank.revolut.com/api/user`

#### Headers

- x-access-token,string,required
  User's access token value

Returns current user's data.

```json
{
  "id": "05d8809f-06cf-4025-a3b9-5b61b371dd32",
  "createdDate": 1759763010484,
  "firstName": "Isabel",
  "lastName": "Flowers",
  "state": "ACTIVE",
  "iban": "GB00BARC27531853598765",
  "bankName": "Revolut",
  "sortCode": "Sort Code",
  "accountNumber": "42515609",
  "address": "9347 The Grove, London, YO46 4TP",
  "currency": "GBP",
  "iat": 1759763010,
  "exp": 1760972610
}
```

## View transactions

### New endpoint

**GET** `https://interview-mock-bank.revolut.com/api/transactions`

### Headers

- x-access-token,string,required
  User's access token value
  Returns latest user's transactions. Transactions are sorted by createdDate field in descending order.

```json
[
  {
    "id": "b63cfda1-b209-4943-9903-6f32bdcd9488",
    "amount": "997.92",
    "createdDate": 1759587488427,
    "currency": "USD",
    "description": "Guided Tour",
    "state": "COMPLETED"
  },
  {
    "id": "cae21968-5573-4ac0-b265-3c734a3e65cf",
    "amount": "69.83",
    "createdDate": 1759406413388,
    "currency": "EUR",
    "description": "Shirt",
    "state": "COMPLETED"
  },
  {
    "id": "cb3b99d6-d291-4522-bcc1-94af0dd168db",
    "amount": "944.43",
    "createdDate": 1759201530201,
    "currency": "AED",
    "description": "Controller",
    "state": "COMPLETED"
  },
  {
    "id": "bbb8457e-1fbb-4c42-8217-e081909d2328",
    "amount": "122.73",
    "createdDate": 1759193361910,
    "currency": "AED",
    "description": "Toys",
    "state": "COMPLETED"
  },
  {
    "id": "4ad080da-cf1f-477c-9261-454cfabe0268",
    "amount": "278.71",
    "createdDate": 1759095810372,
    "currency": "EUR",
    "description": "Clothes",
    "state": "COMPLETED"
  },
  {
    "id": "1e59f559-851b-4aee-92b0-c3280ddef3f6",
    "amount": "35.62",
    "createdDate": 1759034155637,
    "currency": "SEK",
    "description": "Cakes & Snakes",
    "state": "COMPLETED"
  },
  {
    "id": "2a7000af-3cca-4643-91bf-71606ef3a0c6",
    "amount": "536.37",
    "createdDate": 1758906010705,
    "currency": "AUD",
    "description": "5 Star Hotel",
    "state": "COMPLETED"
  },
  {
    "id": "940395ee-f796-4871-85d9-6afc8a0e596a",
    "amount": "903.35",
    "createdDate": 1758824785349,
    "currency": "SEK",
    "description": "Cool Coffee Shop",
    "state": "COMPLETED"
  },
  {
    "id": "5b6f3aae-3fa6-4dbb-9bdf-dee253ec1fc6",
    "amount": "250.93",
    "createdDate": 1758761757967,
    "currency": "PLN",
    "description": "Cool Coffee Shop",
    "state": "COMPLETED"
  },
  {
    "id": "c07fbbce-74dd-44d6-8fac-915155118613",
    "amount": "813.15",
    "createdDate": 1758728003325,
    "currency": "SEK",
    "description": "Videogames",
    "state": "COMPLETED"
  }
]
```
