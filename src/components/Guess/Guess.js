import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers"

function Guess({ guess }) {
  const listOfLetters = range(guess.length);

  return (
    <p className="guess">
      {listOfLetters.map(( position ) => (
        <span key={ position } className={`cell ${guess[ position ].status}`}>
          { guess[ position ].letter }
        </span>
      ))}
    </p>
  );
}

export default Guess;
