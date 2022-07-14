import { useEffect } from "react";
import "./App.css";
import "./components/gameInput/gameInput.component";
import GameInput from "./components/gameInput/gameInput.component";
import Title from "./components/title/title.component";

function App() {
  const userValue = 34;

  return (
    <div className="App">
      <Title text="Guess The Num!" />
      <GameInput secretNumber={userValue} />
    </div>
  );
}

export default App;
