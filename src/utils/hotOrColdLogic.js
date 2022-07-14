export const hotOrColdLogic = (
  numGuess,
  setGuessInfoText,
  secretNumber,
  setNumGuess
) => {
  if (numGuess > 100 || numGuess <= 0) {
    setNumGuess("");
    setGuessInfoText("Choose any number from 1 to 100!");
  } else if (numGuess === secretNumber) {
    setGuessInfoText("YAY YOU WON OMG");
  } else if (
    (numGuess >= secretNumber - 5 && numGuess < secretNumber) ||
    (numGuess <= secretNumber + 5 && numGuess > secretNumber)
  ) {
    setGuessInfoText("getting very warm...");
  } else if (
    (numGuess >= secretNumber - 10 && numGuess < secretNumber) ||
    (numGuess <= secretNumber + 10 && numGuess > secretNumber)
  ) {
    setGuessInfoText("getting warmer...");
  } else if (
    (numGuess >= secretNumber - 30 && numGuess < secretNumber) ||
    (numGuess <= secretNumber + 30 && numGuess > secretNumber)
  ) {
    setGuessInfoText("You're cold...");
  } else if (
    (numGuess >= secretNumber - 66 && numGuess < secretNumber) ||
    (numGuess <= secretNumber + 66 && numGuess > secretNumber)
  ) {
    setGuessInfoText("You're freezing...");
  } else if (numGuess === "") {
    setGuessInfoText("Choose any number from 1 to 100!");
  }
};
