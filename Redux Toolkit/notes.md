# Redux Toolkit

Redux Toolkit is a package designed to make working with Redux, a popular state management library for JavaScript applications, more efficient and convenient. Redux itself provides a predictable state container for JavaScript apps, but using it often involves writing a lot of boilerplate code to set up actions, reducers, and store configurations.

Redux Toolkit simplifies the process of managing state in Redux by providing utility functions, conventions, and tools to streamline common tasks. It includes several features: 

## Features

1. **`configureStore()`**: Redux Toolkit provides a `configureStore()` function that combines several store setup steps into a single function call. It automatically sets up middleware, enables the Redux DevTools Extension, and configures other store options.

2. **`createSlice()`**: This utility function generates action creators and reducers based on a slice of the Redux state. It allows developers to define reducers and action creators in one place without the need to write boilerplate code.

3. **`createReducer()`**: Similar to `createSlice()`, `createReducer()` allows developers to define reducers in a more concise way, without the need for switch statements.

4. **`createAction()`**: This function generates action creator functions, making it easier to define actions without writing a lot of boilerplate.

5. **Immer integration**: Redux Toolkit uses Immer internally to allow developers to write simpler immutable updates to state. This means you can write "mutating" code that works as if it's immutable, making state updates easier to reason about.

# Redux Store as Centralized State Management

Redux store can indeed be thought of as a central place where any component within your application can access the state. In Redux, the store holds the entire state tree of your application. This state can then be accessed and manipulated by any component within your application hierarchy without the need for passing props down through intermediate components.(`Props Drilling`)

Components can access the Redux store using functions provided by the `react-redux` library, such as `connect()` or hooks like `useSelector()` and `useDispatch()`. These functions allow components to subscribe to changes in the Redux store and dispatch actions to update the state.

By centralizing the state in the Redux store, you create a single source of truth for your application's data, making it easier to manage and maintain, especially in larger applications with complex component hierarchies. Additionally, it promotes a more predictable data flow within your application, as components can rely on the Redux store for accessing and updating state.

In Redux, to maintain separation of concerns and manage complexity, the state in the Redux store is often organized into smaller "slices" based on different parts of your application's domain or features. These slices represent logical divisions of the state tree. Each slice typically has its own set of actions and reducers responsible for managing that portion of the state.

By breaking down the state into smaller, more manageable pieces, Redux facilitates better organization and maintainability of your application's state management logic. It also allows for better scalability as your application grows in complexity.

# Managing Cart Functionality with Redux

In the context of a shopping cart functionality, Redux can be utilized to manage the cart state effectively.

- **Dispatching Actions on Button Clicks:** When a user interacts with the cart, such as hitting the plus button to increase the quantity of an item, an action is dispatched. This action triggers a corresponding reducer function.

- **Reducer Updates the Store Slices:** The reducer function, associated with the dispatched action, updates the relevant slices of the Redux store. For instance, if the action is to increase the quantity of an item in the cart, the reducer will update the corresponding slice of the store to reflect the change in quantity.

- **Subscribing to Store Changes:** Components interested in the cart state can subscribe to changes in the Redux store. They can achieve this using functions provided by the `react-redux` library, such as `useSelector()`, to access the cart state. By subscribing to changes, components are automatically notified whenever the cart state is updated, ensuring that they reflect the latest data from the store.

# Setting Up Redux with Redux Toolkit in a React Application

## Step 1 : Install Dependencies
To set up Redux Toolkit  in a React application, you typically need to install two main packages:

### 1. @reduxjs/toolkit

This package provides utilities to simplify Redux setup and usage. It includes functions like `configureStore()` for configuring the Redux store, `createSlice()` for defining Redux slices, and various other utilities to streamline Redux development.

You can install it using npm or yarn:

```bash
npm install @reduxjs/toolkit
# or
yarn add @reduxjs/toolkit
```

### 2. react-redux

`react-redux` provides the necessary bindings to connect Redux with a React application. It offers components like `<Provider>` to wrap your application and make the Redux store accessible to all components, as well as hooks like `useSelector()` and `useDispatch()` to interact with the Redux store from within functional components.

### Installation

You can install `react-redux` using npm or yarn:

```bash
npm install react-redux
# or
yarn add react-redux
```

## Step 2 : Create Slice Reducers 

Create a slice reducer using Redux Toolkit's `createSlice()` function. For example, `cartSlice.js`:

```js
// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart(state){
      state.items = []
    }
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
```

## Step 3 : Configure the Redux Store

Create a `store.js `file to configure the Redux store using `configureStore()`:

```js
// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default store;
```

## Step 4 : Integrate Redux with React

Wrap your React application with `<Provider>` in `index.js` to provide access to the `Redux store`:

```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider, Outlet } from 'found';
import store from './store'; // Import the Redux store
import Header from './Header';
import Footer from './Footer';
import Error from './Error'; 
import Body from './Body'; 
import About from './About'; 
import Contact from './Contact'; 
import RestaurantMenu from './RestaurantMenu'; 
import LoginForm from './LoginForm'; 
import Cart from './Cart'; 

const AppLayout = () => {
  return (
    <Provider store={store}> {/* redux store is integerated*/}
      <Header />
      <Outlet /> {/* Outlet is where child routes will be rendered */}
      <Footer />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Body /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/restaurant/:resId', element: <RestaurantMenu /> },
      { path: '/login', element: <LoginForm /> },
      { path: '/cart', element: <Cart /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter} />
);
```

## Step 5 :  Connect Components to the Redux Store

In your React components, connect to the Redux store using hooks like `useSelector()` and `useDispatch()`:

```js
// CartComponent.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from './cartSlice';

const CartComponent = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            <button onClick={()=>handleAddItem(item)}>Add Item</button>
            {/*here i have just use it for example purpose but ideally , addItem button should be in components where we display restaurant items*/}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartComponent;
```