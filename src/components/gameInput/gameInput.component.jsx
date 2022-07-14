import { useState, useEffect } from "react";
import { hotOrColdLogic } from "../../utils";
import "./gameInput.styles.css";

const GameInput = ({ secretNumber }) => {
  const [numGuess, setNumGuess] = useState("");
  const [guessInfoText, setGuessInfoText] = useState("Enter a Guess!");

  const onNumChange = (event) => {
    const inputValue = parseInt(event.target.value);
    inputValue ? setNumGuess(inputValue) : setNumGuess("");
  };

  useEffect(() => {
    hotOrColdLogic(numGuess, setGuessInfoText, secretNumber, setNumGuess);
    //eslint-disable-next-line
  }, [numGuess]);

  useEffect(() => {
    setGuessInfoText("Enter a Guess!");
  }, []);

  return (
    <>
      <input
        className="game-input"
        type="text"
        onChange={(event) => onNumChange(event)}
        value={numGuess}
      />
      <h2 className="span">{guessInfoText}</h2>
    </>
  );
};

export default GameInput;
