import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import InputWord from '../InputWord';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { checkGuess } from "../../game-helpers"

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.

console.info({ answer });

function Game() {
  const [ results  , setResults   ] = useState( {} );
  const [ wordValue, setWordValue ] = useState( '' );

  const onInputValueChange = ( value ) => {
    setWordValue( value );
  }

  const onInputSubmit = ( value ) => {
    if ( NUM_OF_GUESSES_ALLOWED === Object.keys( results ).length ) return;
    if ( value.length !== 5 ) return;
    
    if ( Object.values( results ).includes( value ) ) return;

    const guessResult = checkGuess( value, answer );
    const nextResults = { ...results, [ crypto.randomUUID() ]: [ ...guessResult ] };
    setResults( nextResults );
    setWordValue( '' );
  }

  const isLose = ( valuestoCheck ) => {
    const resultValeus = Object.values( valuestoCheck );
    if ( resultValeus.length !== NUM_OF_GUESSES_ALLOWED ) return false;

    const [ _, label ]=resultValeus[ resultValeus.length - 1 ];
    return label.status !== 'correct'
  }

  const isWin = ( valuesToCheck ) => {
    const resultValues = Object.values( valuesToCheck );
    const valuesJoined = resultValues.map(( result ) => result.map(({ letter }) => letter ).join(''));

    if ( valuesJoined.includes( answer ) ) return true;
  }



  return (
    <>
      <GuessResults results={Object.entries(results)}/>
      <InputWord inputValue={ wordValue } onChange={ onInputValueChange } onSubmit={ onInputSubmit } />

      { Object.keys(results).length > 5 && isLose( results ) && (
        <div class="sad banner">
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
      )}

      { isWin( results ) && (
        <div className="happy banner">
          <p>Congratulations! You've won!</p>
        </div>
      )}
    </>
  )
}

export default Game;
