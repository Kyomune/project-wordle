import React from "react";

function GuessResults({ results }) {
  return (
    <div class="guess-results">
      {results.map(([ id, label ]) => (
        <p class="guess" key={id}>
          {label}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
