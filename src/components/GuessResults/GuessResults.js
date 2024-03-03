import React from "react";
import Guess from "../Guess"

function GuessResults({ results }) {
  return (
    <div className="guess-results">
      {results.map(([ id, guess ]) => (
        <Guess key={id} guess={guess} />
      ))}
    </div>
  );
}

export default GuessResults;
