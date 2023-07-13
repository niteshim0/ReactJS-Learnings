import React from "react";
import  ReactDOM  from "react-dom/client";
const heading = React.createElement("h1",{
  id : "title",
},"Igniting the App!");

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);

const heading2 = React.createElement("h2",{
  id : "title",
},"Learning Parcel!");

const container = React.createElement("div",{
  id : "title",
},[heading,heading2]);
root.render(container);