import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  const listOfLetters = range(guess.length);

  return (
    <p className="guess">
      {listOfLetters.map((position) => (
        <span key={position} className="cell">
          {guess[position]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
