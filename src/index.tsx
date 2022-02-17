import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";

// Writing to the DOM is a desired side-effect here
// eslint-disable-next-line functional/no-expression-statement
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
