export const hotOrColdLogic = (
  inputValue,
  setGuessInfoText,
  secretNumber,
  setInputValue,
  setGuessText
) => {
  const getNumberDifference = (num1, num2) => {
    return num1 - num2;
  };
  const numberDifference = Math.abs(
    getNumberDifference(inputValue, secretNumber)
  );
  if (inputValue > 100 || inputValue <= 0) setInputValue("");
  else if (numberDifference <= 2 && numberDifference > 0 && inputValue > 9) {
    setGuessInfoText("🌶 You're boiling...");
    setGuessText(`Your guess was ${inputValue}`);
    setInputValue("");
  } else if (numberDifference >= 2 && numberDifference < 9 && inputValue > 9) {
    setGuessInfoText("🏝 You're warm...");
    setGuessText(`Your guess was ${inputValue}`);
    setInputValue("");
  } else if (numberDifference >= 6 && numberDifference < 39 && inputValue > 9) {
    setGuessInfoText("🌨 You're cold...");
    setGuessText(`Your guess was ${inputValue}`);
    setInputValue("");
  } else if (
    numberDifference >= 39 &&
    numberDifference < 100 &&
    inputValue > 9
  ) {
    setGuessInfoText("🧊 You're freezing...");
    setGuessText(`Your guess was ${inputValue}`);
    setInputValue("");
  } else if (numberDifference === 0 && secretNumber === 69 && inputValue > 9)
    setGuessInfoText("🔥💯 Nice... You Won!");
  else if (numberDifference === 0 && inputValue > 9) {
    setGuessInfoText("🔥 You're on fire! You Won!");
    setGuessText(`Your guess was ${inputValue}`);
  }
};
