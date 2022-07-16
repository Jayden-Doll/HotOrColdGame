export const hotOrColdLogic = (
  numGuess,
  setGuessInfoText,
  secretNumber,
  setNumGuess
) => {
  const getNumberDifference = (num1, num2) => {
    return num1 - num2;
  };
  const numberDifference = Math.abs(
    getNumberDifference(numGuess, secretNumber)
  );
  console.log(`Number Difference: ${numberDifference}`);
  console.log(`Random num: ${secretNumber}`);
  if (numGuess > 100 || numGuess <= 0) {
    setGuessInfoText("Enter a number from 1 - 100!");
    setNumGuess("");
  } else if (numberDifference <= 2 && numberDifference > 0)
    setGuessInfoText("Getting very hot...");
  else if (numberDifference >= 2 && numberDifference < 9)
    setGuessInfoText("Getting warmer...");
  else if (numberDifference >= 6 && numberDifference < 39)
    setGuessInfoText("You're cold...");
  else if (numberDifference >= 39 && numberDifference < 100)
    setGuessInfoText("You're freezing...");
  else if (numberDifference === 0 && secretNumber === 69)
    setGuessInfoText("Nice... You Won!");
  else setGuessInfoText("You Won!");
};
