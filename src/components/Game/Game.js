import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import InputWord from '../InputWord';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [ wordValue, setWordValue ] = useState( '' );

  const onInputValueChange = ( value ) => {
    setWordValue( value );
  }

  const onInputSubmit = ( value ) => {
    console.log(value);
    setWordValue( value );
  }

  return (
    <>
      <InputWord inputValue={ wordValue } onChange={ onInputValueChange } onSubmit={ onInputSubmit } />
    </>
  )
}

export default Game;
