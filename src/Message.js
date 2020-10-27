import React from "react";

export default function Message({ heads, tails, flips }) {
  return (
    <p>
      Out of {flips} flips, there were {heads} heads and {tails} tails.
    </p>
  );
}
