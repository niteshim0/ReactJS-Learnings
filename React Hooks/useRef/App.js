import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [myNum, setMyNum] = useState(0);

  const inputOne = useRef();
  const inputTwo = useRef();

  const getNumBox = () => {
    console.log("Hello");
    console.log(inputOne.current);
    inputOne.current.style.width = "400px";
  };

  const getTextBox = () => {
    console.log("World");
    console.log(inputTwo.current);
  };

  return (
    <>
      <h2>useRef Example</h2>
      <input
        ref={inputOne}
        value={myNum}
        type="number"
        style={{ width: "100px" }}
        onChange={(e) => setMyNum(e.target.value)}
      />
      <input
        ref={inputTwo}
        value={myNum}
        type="text"
        onChange={(e) => setMyNum(e.target.value)}
      />
      <h3>Value is: {myNum}</h3>
      <button onClick={() => getNumBox()}>Rupees</button>
      <button onClick={() => getTextBox()}>Dollars</button>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
