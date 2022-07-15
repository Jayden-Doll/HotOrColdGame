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
    (numGuess >= secretNumber - 2 && numGuess < secretNumber) ||
    (numGuess <= secretNumber + 2 && numGuess > secretNumber)
  ) {
    setGuessInfoText("getting very hot...");
  } else if (
    (numGuess >= secretNumber - 8 && numGuess < secretNumber) ||
    (numGuess <= secretNumber + 8 && numGuess > secretNumber)
  ) {
    setGuessInfoText("getting warmer...");
  } else if (
    (numGuess >= secretNumber - 32 && numGuess < secretNumber) ||
    (numGuess <= secretNumber + 32 && numGuess > secretNumber)
  ) {
    setGuessInfoText("You're cold...");
  } else if (
    (numGuess >= secretNumber - 100 && numGuess < secretNumber) ||
    (numGuess <= secretNumber + 100 && numGuess > secretNumber)
  ) {
    setGuessInfoText("You're freezing...");
  } else if (numGuess === "") {
    setGuessInfoText("Choose any number from 1 to 100!");
  }
};
