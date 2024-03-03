import React from "react";

function InputWord({ inputValue, onChange, onSubmit }) {
  const onSubmitChange = ( event ) => {
    event.preventDefault();
    onSubmit( inputValue );
  }

  return (
    <form onSubmit={onSubmitChange} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={inputValue}
        onChange={(event) => onChange(event.target.value.toUpperCase())}
        maxLength={5}
      />
    </form>
  );
}

export default InputWord;
