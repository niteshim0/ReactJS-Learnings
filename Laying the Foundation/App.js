import React from "react";
import  ReactDOM  from "react-dom/client";

//React Element
const title = (
  <h1 id="title" key ="h1">
    React Element
  </h1>
);
const AnotherComponent = () => (
  <h1 id="title" key ="h1">
    AnotherComponent
  </h1>
);

//React Functional Component
const HeaderComponent = () => (
  <div>
    {title}
    <AnotherComponent/>
    <h2>
      Welcome into the world of Functional Component
    </h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>)
