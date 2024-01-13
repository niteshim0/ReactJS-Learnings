# React Router - BrowserRouter

## Overview

React Router is a library that enables navigation and URL handling in React applications. `BrowserRouter` is a key component within React Router, providing a foundation for client-side routing.

## Key Concepts

1. **Routing Environment Setup:**
   - `BrowserRouter` wraps the entire React application.
   - It utilizes the HTML5 history API to synchronize the UI with URL changes.
   - A <BrowserRouter> stores the current location in the browser's address bar using clean URLs and navigates using the browser's built-in history stack.

```jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Search from './components/Search';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router> 
  );
}

export default App;

```
## Benefits

- **Client-Side Navigation:**
  - Enables smooth client-side navigation without page reloads.

- **Dynamic UI Rendering:**
  - Components are dynamically rendered based on the current URL.

## Best Practices

- **Use `exact` with the root route:**
  - Ensure that the root route is matched exactly to prevent unintended rendering of components.

```jsx
<Route path="/" exact component={Home} />
```

