import React, { useState } from "react";

function Thirteen() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  function add() {
    setResult(Number(num1) + Number(num2));
  }

  function subtract() {
    setResult(Number(num1) - Number(num2));
  }

  function multiply() {
    setResult(Number(num1) * Number(num2));
  }

  function divide() {
    if (Number(num2) !== 0) {
      setResult(Number(num1) / Number(num2));
    } else {
      alert("Cannot divide by zero!");
    }
  }

  return (
    <div>
      <h1>Simple Calculator</h1>

      <label>
        Number 1:
        <input
          type="number"
          placeholder="Enter Number 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
      </label>
      <br /><br />

      <label>
        Number 2:
        <input
          type="number"
          placeholder="Enter Number 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </label>
      <br /><br />

      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
      <button onClick={multiply}>Multiply</button>
      <button onClick={divide}>Divide</button>

      <h2>Result: {result}</h2>
    </div>
  );
}

export default Thirteen;
