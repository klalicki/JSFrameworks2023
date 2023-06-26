import { Fragment, useState } from "react";
const GuessTheNumber = () => {
  const getRandomNumber = () => {
    return Math.round(Math.random() * 10);
  };
  const [userGuess, setUserGuess] = useState("");
  const [gameNumber, setGameNumber] = useState(getRandomNumber());
  const [userMessage, setUserMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const handleGuessChange = (e) => {
    setUserGuess(parseInt(e.target.value));
  };
  const handleSubmitGuess = () => {
    let message;
    if (userGuess === gameNumber) {
      message = "Correct! You win!";
    } else {
      if (userGuess > gameNumber) {
        message = `Too high! The correct number was ${gameNumber}`;
      } else {
        message = `Too low! The correct number was ${gameNumber}`;
      }
    }
    setUserMessage(message);
    setGameOver(true);
  };
  const handleResetButton = () => {
    setGameNumber(getRandomNumber());
    setUserGuess("");
    setUserMessage("");
    setGameOver(false);
  };
  return (
    <form>
      <p>Please enter a number!</p>
      <input
        type="number"
        min={0}
        max={10}
        value={userGuess}
        onChange={handleGuessChange}
      />
      <div className="form-group pt-3 pb-3">
        {!gameOver && (
          <button
            className="btn btn-dark"
            onClick={handleSubmitGuess}
          >
            Submit Guess
          </button>
        )}
        {gameOver && (
          <button
            className="btn btn-dark"
            onClick={handleResetButton}
          >
            Reset
          </button>
        )}
      </div>

      {/* <h1>correct value: {gameNumber}</h1> */}
      {/* <h2>your guess: {userGuess}</h2> */}
      {userMessage && <h3>{userMessage}</h3>}
    </form>
  );
};
export default GuessTheNumber;
