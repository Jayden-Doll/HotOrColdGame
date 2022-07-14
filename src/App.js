import { useEffect, useState } from "react";
import "./App.css";
import "./components/gameInput/gameInput.component";
import GameInput from "./components/gameInput/gameInput.component";
import Title from "./components/title/title.component";

function App() {
  const [randomNumber, setRandomNumber] = useState("");

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(randomNumber);
  }, [randomNumber]);

  return (
    <div className="App">
      <Title text="Guess The Num!" />
      <GameInput secretNumber={randomNumber} />
    </div>
  );
}

export default App;
