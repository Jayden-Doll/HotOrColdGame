import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import "./components/gameInput/gameInput.component";
import GameInput from "./components/gameInput/gameInput.component";
import Title from "./components/title/title.component";

function App() {
  const [color, setColor] = useState("#333");
  const [randomNumber, setRandomNumber] = useState("");

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
    setRandomNumber(randomNumber);
    console.log(randomNumber);
  }, []);

  const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
    setRandomNumber(randomNumber);
    console.log(randomNumber);
  };

  return (
    <motion.div
      className="body"
      transition={{ duration: 0.2 }}
      animate={{ backgroundColor: color }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="App"
      >
        <Title text="Guess The Number!" />
        <GameInput
          setColor={setColor}
          bodyColor={color}
          secretNumber={randomNumber}
          getRandomNumber={getRandomNumber}
        />
      </motion.div>
    </motion.div>
  );
}

export default App;
