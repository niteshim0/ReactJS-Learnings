# React Dynamic Import, Lazy Loading, and Code Splitting

## Dynamic Import

Dynamic import is a feature in JavaScript that allows modules or code to be loaded dynamically at runtime. In JavaScript, this is achieved using the `import()` function, which returns a Promise.

## Lazy Loading

Lazy loading is the practice of deferring the loading of a module or component until it is actually needed. React provides a React.lazy() function that enables lazy loading of components. This function takes a function that must call a dynamic import().

## Code Splitting

Code splitting is a technique that involves breaking down your JavaScript bundle into smaller chunks, and loading them on demand. Dynamic import and lazy loading are often used in combination with code splitting to achieve better performance.

In modern React applications, tools like Webpack and Create React App (CRA) handle much of the underlying setup for code splitting, and you can leverage the dynamic import syntax and React.lazy() to achieve lazy loading of components.

## Example

```jsx

//Lazy Loading and dynamic import
const Home  =  lazy(() => import('./pages/Home'));
const Cart  =  lazy(() => import('./pages/Cart'));
const Search  =  lazy(() => import('./pages/Search'));

const App = () => {
  return (
    <Router>
      {/*Suspense is used to make see something until the lazy component loads*/}
      <Suspense fallback = {<Loader/>}>
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  )
};
```