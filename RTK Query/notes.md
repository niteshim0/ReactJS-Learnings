# RTK Query

RTK Query is a powerful data fetching and caching library built on top of Redux Toolkit (RTK) for React and React Native applications. It simplifies the process of making network requests and managing the fetched data by providing a set of APIs and utilities.

## Key Features and Benefits

1. **Automatic Caching**: RTK Query automatically caches API responses, eliminating the need to manually manage caching logic.

2. **Automatic Refetching**: It automatically refetches data from the server when needed, such as when data becomes stale or when a specific action triggers a refetch.

3. **Normalized State**: RTK Query normalizes fetched data in the Redux store, making it easier to access and manipulate data across components.

4. **Optimistic Updates**: It supports optimistic updates, allowing you to update the local cache optimistically while waiting for the server response.

5. **Type-Safe**: RTK Query is fully type-safe out of the box, thanks to TypeScript support.

6. **Automatic Error Handling**: It handles common error scenarios such as network failures and server errors automatically, simplifying error handling logic.

7. **Customization**: RTK Query provides various options for customization, allowing you to tailor it to your specific use case and requirements.

# Integrating RTK Query into a React Application

## Step 1: Setup Redux Toolkit

```bash
npm install @reduxjs/toolkit react-redux
```

## Step 2 : Create an API Slice
Create a file named `userAPI.ts `(as according for what thing this api for) to define your API endpoints using `createApi` from RTK Query:

```js
//userAPI.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }), // Adjust the baseUrl according to your API endpoint
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
    }),
    getUserById: builder.query({
      query: (id) => `/users/${id}`,
    }),
    createUser: builder.mutation({
      query: (newUser) => ({
        url: '/users',
        method: 'POST',
        body: newUser,
      }),
    }),
    updateUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery, useCreateUserMutation, useUpdateUserMutation, useDeleteUserMutation } = userAPI;

```

## Step 3 : Configuring the store

In your Redux store configuration file (usually `store.js`), combine the `reducers` and `middleware` provided by RTK Query:

```js
//store.js
import { configureStore } from '@reduxjs/toolkit';
import { userAPI } from './userAPI';

const store = configureStore({
  reducer: {
    [userAPI.reducerPath]: userAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAPI.middleware),
});

export default store;

```

## Step 4.1 : Integrate RTK Query with React without Redux
```js
//main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { userAPI } from './redux/api/userAPI.js'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApiProvider api={userAPI}>
      <App />
    </ApiProvider>
  </React.StrictMode>,
)

```

## Step 4.2 : Integrate RTK Query with React with Redux
```js
//main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
```


## Step 5 : Use RTK Query Hooks in Components

Use the generated hooks in your React components to fetch data:

```js
import React from 'react';
import { useGetUsersQuery } from './userAPI';

const UsersList = () => {
  const { data, error, isLoading } = useGetUsersQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UsersList;

```

# Difference Between Query and Mutation in RTK Query

In the context of RTK Query, there are two primary types of operations: queries and mutations.

## Query

- Queries are used to fetch data from a server.
- They are typically used for read operations, such as fetching a list of users, retrieving a single user's details, fetching a list of products, etc.
- Queries are executed using the `useQuery` hook in React components.
- Queries do not modify data on the server; they only fetch data.
- They are typically cached by default to improve performance and avoid unnecessary network requests.

## Mutation

- Mutations are used to modify data on the server.
- They are typically used for write operations, such as creating a new user, updating an existing user's details, deleting a user, etc.
- Mutations are executed using the `useMutation` hook in React components.
- Mutations send data to the server and await a response to indicate success or failure.
- They do not automatically cache data since mutations involve modifying server-side state, and subsequent queries might need to reflect these changes.









