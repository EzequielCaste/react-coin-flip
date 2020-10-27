import React from "react";
import ReactDOM from "react-dom";

import CoinFlip from "./CoinFlip";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <CoinFlip />
  </React.StrictMode>,
  rootElement
);
