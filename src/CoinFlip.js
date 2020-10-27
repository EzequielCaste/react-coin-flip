import React from "react";
import "./styles.css";

export default function CoinFlip() {
  const heads =
    "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg";

  return (
    <div className="coin-flip">
      <img alt="coin" src={heads} />
      <button>Flip!</button>
    </div>
  );
}
