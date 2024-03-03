import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import InputWord from '../InputWord';
import GuessResults from '../GuessResults';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants'

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

    const nextResults = { ...results, [ crypto.randomUUID() ]: value };
    setResults( nextResults );
    setWordValue( '' );
  }

  return (
    <>
      <GuessResults results={Object.entries(results)}/>
      <InputWord inputValue={ wordValue } onChange={ onInputValueChange } onSubmit={ onInputSubmit } />
    </>
  )
}

export default Game;
