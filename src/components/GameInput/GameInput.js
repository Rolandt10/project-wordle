import React from "react";

function GameInput({ guesses, setGuesses }) {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      class="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        const newGuess = guess.toUpperCase();
        const nextGuesses = [...guesses, newGuess];
        console.log(newGuess);
        setGuess("");
        setGuesses(nextGuesses);
      }}
    >
      <label for="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        pattern="\w{5,5}"
      />
    </form>
  );
}

export default GameInput;
