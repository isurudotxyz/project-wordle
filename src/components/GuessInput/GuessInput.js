import React from "react";

function GuessInput({ handleSubmitGuess }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuess(guess);
    setGuess("");

    // if (guess.length !== 5) {
    //   window.alert("Please enter exactly five characters");
    // }

    // console.log({ guess });
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          value={guess}
          pattern="[A-Z]{5}"
          onChange={(e) => {
            setGuess(e.target.value.toUpperCase());
          }}
          id="guess-input"
          type="text"
        ></input>
      </form>
    </>
  );
}

export default GuessInput;
