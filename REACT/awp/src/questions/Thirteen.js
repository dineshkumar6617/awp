import React, { useState } from "react";
// import "../Calc.css"; // importing external CSS

function Thirteen() {
  const [input, setInput] = useState("");

  // Handle button click
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Clear input
  const handleClear = () => {
    setInput("");
  };

  // Evaluate expression
  const handleEqual = () => {
    try {
      // eslint-disable-next-line no-eval
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator-container">
      <h1>React Calculator</h1>
      <div className="calculator">
        <input type="text" value={input} readOnly className="display" />

        <div className="buttons">
          <button onClick={handleClear} className="clear">C</button>
          <button onClick={() => handleClick("/")}>/</button>
          <button onClick={() => handleClick("*")}>*</button>
          <button onClick={() => handleClick("-")}>-</button>

          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("+")}>+</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={handleEqual} className="equal">=</button>

          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("0")}>0</button>

          <button onClick={() => handleClick(".")}>.</button>
        </div>
      </div>
    </div>
  );
}

export default Thirteen;
