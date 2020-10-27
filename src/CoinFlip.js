import React, { useState } from "react";
import CoinImage from "./CoinImage";
import Message from "./Message";
import "./styles.css";

export default function CoinFlip() {
  const coins = [
    "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg",
    "https://i.imgur.com/QUgWetL.jpg"
  ];

  const [side, setSide] = useState("");

  const [currentFlip, setCurrentFlip] = useState({
    heads: 0,
    tails: 0,
    flips: 0
  });

  const flipCoin = () => {
    const rngCoin = Math.floor(Math.random() * 2);

    const newFlip = currentFlip;

    newFlip.flips = ++currentFlip.flips;

    const newSide = coins[rngCoin];

    newSide.includes("wiki")
      ? (newFlip.heads = ++currentFlip.heads)
      : (newFlip.tails = ++currentFlip.tails);

    setSide(newSide);

    setCurrentFlip(newFlip);
  };

  return (
    <div className="coin-flip">
      {side && <CoinImage coin={side} />}
      <Message {...currentFlip} />
      <button onClick={flipCoin}>Flip!</button>
    </div>
  );
}
