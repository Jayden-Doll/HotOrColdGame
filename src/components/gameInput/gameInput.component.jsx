import { useState, useEffect } from "react";
import { hotOrColdLogic } from "../../utils";
import "./gameInput.styles.css";

const GameInput = ({ secretNumber }) => {
  const [numGuess, setNumGuess] = useState("");

  const [isDisabled, setIsDisabled] = useState(false);

  const [guessInfoText, setGuessInfoText] = useState(
    "Enter a number from 1 - 100!"
  );

  const onNumChange = (event) => {
    const inputValue = parseInt(event.target.value);
    inputValue ? setNumGuess(inputValue) : setNumGuess("");
  };

  useEffect(() => {
    hotOrColdLogic(numGuess, setGuessInfoText, secretNumber, setNumGuess);
    if (secretNumber && numGuess === secretNumber) {
      setIsDisabled(true);
    }
    //eslint-disable-next-line
  }, [numGuess]);

  return (
    <>
      <input
        className="game-input"
        type="text"
        onChange={(event) => onNumChange(event)}
        value={numGuess}
        disabled={isDisabled}
      />
      <h2 className="span">{guessInfoText}</h2>
    </>
  );
};

export default GameInput;
