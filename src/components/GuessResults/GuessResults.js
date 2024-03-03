import React from "react";
import Guess from "../Guess"

function GuessResults({ results }) {
  return (
    <div className="guess-results">
      {results.map(([ id, label ]) => (
        <Guess key={id} guess={label} />
      ))}
    </div>
  );
}

export default GuessResults;
