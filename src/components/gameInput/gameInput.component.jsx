import { motion } from "framer-motion";

import { useState, useEffect } from "react";
import { hotOrColdLogic } from "../../utils";

import "./gameInput.styles.css";

const GameInput = ({ secretNumber, bodyColor, setColor, getRandomNumber }) => {
  const [numGuess, setNumGuess] = useState("");

  const [isDisabled, setIsDisabled] = useState(false);
  const [isHidden, setIsHidden] = useState("");

  const [guessInfoText, setGuessInfoText] = useState(
    "Enter a number from 1 - 100!"
  );

  const onNumChange = (event) => {
    const inputValue = parseInt(event.target.value);
    inputValue ? setNumGuess(inputValue) : setNumGuess("");
  };

  const resetGame = () => {
    getRandomNumber();
    setNumGuess("");
    setColor("#333");
    setGuessInfoText("Enter a number from 1 - 100!");
    setIsHidden("hidden");
    setIsDisabled(false);
  };

  useEffect(() => {
    hotOrColdLogic(numGuess, setGuessInfoText, secretNumber, setNumGuess);
    if (secretNumber && numGuess === secretNumber) {
      setIsDisabled(true);
      setColor("#4BB543");
      setIsHidden("");
    }
    //eslint-disable-next-line
  }, [numGuess]);

  return (
    <>
      <motion.input
        className="game-input"
        type="text"
        onChange={(event) => onNumChange(event)}
        value={numGuess}
        disabled={isDisabled}
        whileFocus={{ scale: 1.2 }}
      />
      <motion.h2 className="span">{guessInfoText}</motion.h2>
      <motion.button onClick={resetGame} className={`${isHidden} btn-retry`}>
        Retry
      </motion.button>
    </>
  );
};

export default GameInput;
