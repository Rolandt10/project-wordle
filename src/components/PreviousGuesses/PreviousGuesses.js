function PreviousGuesses({ guesses }) {
  return (
    <div class="guess-results">
      {guesses.map((guess) => (
        <p class="guess" key={Math.random()}>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default PreviousGuesses;
