import { motion } from "framer-motion";

import { useState, useEffect } from "react";
import { hotOrColdLogic } from "../../utils";

import "./gameInput.styles.css";

const GameInput = ({ secretNumber, setColor, getRandomNumber }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isHidden, setIsHidden] = useState("hidden");

  const [inputValue, setInputValue] = useState("");
  const [guessInfoText, setGuessInfoText] = useState(
    "Enter a number from 10 - 99!"
  );
  const [guessText, setGuessText] = useState("");

  const onNumChange = (event) => {
    const inputValue = parseInt(event.target.value);
    inputValue ? setInputValue(inputValue) : setInputValue("");
  };

  const resetGame = () => {
    getRandomNumber();
    setInputValue("");
    setColor("#333");
    setGuessInfoText("Enter a number from 10 - 99!");
    setIsHidden("hidden");
    setIsDisabled(false);
  };

  useEffect(() => {
    hotOrColdLogic(
      inputValue,
      setGuessInfoText,
      secretNumber,
      setInputValue,
      setGuessText
    );
    if (secretNumber && inputValue === secretNumber) {
      setIsDisabled(true);
      setColor("#4BB543");
      setIsHidden("");
    }
    //eslint-disable-next-line
  }, [inputValue]);

  return (
    <>
      <motion.input
        className="game-input"
        type="text"
        onChange={(event) => onNumChange(event)}
        value={inputValue}
        disabled={isDisabled}
        whileFocus={{ scale: 1.2 }}
      />
      <p>{guessText}</p>
      <motion.p>{guessInfoText}</motion.p>
      <motion.button onClick={resetGame} className={`${isHidden} btn-retry`}>
        Retry
      </motion.button>
    </>
  );
};

export default GameInput;
