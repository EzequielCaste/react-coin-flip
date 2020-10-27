import React from "react";
import CoinImage from "./CoinImage";
import Message from "./Message";
import "./styles.css";

export default function CoinFlip() {
  const heads =
    "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg";

  return (
    <div className="coin-flip">
      <CoinImage coin={heads} />
      <Message />
      <button>Flip!</button>
    </div>
  );
}
