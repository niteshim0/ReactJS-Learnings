# Understanding `useRef` in React

1. `useRef` is a React Hook that allows you to reference a value that's not needed for rendering. It is particularly useful for storing information that doesn't affect the visual output of your component.

```js
const ref = useRef(initialValue);
```

2. `useRef`returns an object with a single property:current.
Initially, it’s set to the initialValue you have passed. You can later set it to something else. If you pass the ref object to React as a ref attribute to a JSX node, React will set its current property.On the next renders, useRef will return the same object.


3. You can mutate the ref.current property. Unlike state, it is mutable. However, if it holds an object that is used for rendering (for example, a piece of your state), then you shouldn’t mutate that object.


4. When you change the ref.current property, React does not re-render your component. React is not aware of when you change it because a ref is a plain JavaScript object.

## Basic Usage
1. Referencing a value with Ref
```jsx
import { useRef } from 'react';

export default function Counter() {
  // Create a ref with an initial value of 0
  let ref = useRef(0);

  function handleClick() {
    // Mutate the ref's current property
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
}

```
2.  Manipulating a Dom with Ref : Already Discussed in the code part

### Difference b/w ref variables and others

1. You can store information between re-renders (unlike regular variables, which reset on every render).

2. Changing it does not trigger a re-render (unlike state variables, which trigger a re-render).

3. The information is local to each copy of your component (unlike the variables outside, which are shared)