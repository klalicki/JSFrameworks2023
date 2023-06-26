import { Fragment, useState } from "react";
const GuessTheNumber = () => {
  const getRandomNumber = () => {
    return Math.round(Math.random() * 10);
  };
  const [userGuess, setUserGuess] = useState(0);
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
    setUserMessage("");
    setGameOver(false);
  };
  return (
    <>
      <input
        type="number"
        min={0}
        max={10}
        onChange={handleGuessChange}
      />
      {!gameOver && <button onClick={handleSubmitGuess}>Submit Guess</button>}
      {gameOver && <button onClick={handleResetButton}>Reset</button>}
      {/* <h1>correct value: {gameNumber}</h1> */}
      {/* <h2>your guess: {userGuess}</h2> */}
      {userMessage && <h3>{userMessage}</h3>}
    </>
  );
};
export default GuessTheNumber;
