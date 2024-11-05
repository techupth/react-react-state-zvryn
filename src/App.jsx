import "./App.css";
import { useState } from "react";

function App() {
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");

  const handleThaiClick = () => {
    setGreetingMessage("สวัสดี");
  };
  const handlHiClick = () => {
    setGreetingMessage("Hi!");
  };
  const handleChineseClick = () => {
    setGreetingMessage("你好!");
  };
  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="buttons">
        <button onClick={() => handleThaiClick()}>สวัสดี!</button>
        <button onClick={() => handlHiClick()}>Hi!</button>
        <button onClick={() => handleChineseClick()}>你好!</button>
      </div>
    </div>
  );
}

export default App;
