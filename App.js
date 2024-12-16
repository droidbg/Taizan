import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const element = React.createElement("h1", {}, "Hello world");

root.render(element);
