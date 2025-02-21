import React from "react";

function GuessResults({ guessList }) {
  console.log(guessList);
  return (
    <div className="guess-results">
      {guessList.map((listItem, index) => (
        <p key={index} className="guess">
          {listItem}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
