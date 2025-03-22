import React from "react";
import ReactDOM from "react-dom/client";

const name = "Artims";
const num = 3;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>hello {name}</h1>
    <p>My lcky number {num}</p>
  </div>
);
