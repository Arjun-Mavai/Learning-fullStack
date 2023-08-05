import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleAddition = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
  };

  const handleSubtraction = () => {
    setResult(parseFloat(num1) - parseFloat(num2));
  };

  const handleMultiplication = () => {
    setResult(parseFloat(num1) * parseFloat(num2));
  };

  const handleDivision = () => {
    setResult(parseFloat(num1) / parseFloat(num2));
  };

  const isEvenOrOdd = () => {
    setResult(parseInt(num1) % 2 === 0 ? 'Even' : 'Odd');
  };

  const isPrimeOrComposite = () => {
    const number = parseInt(num1);
    if (number <= 1) {
      setResult('Composite');
    } else {
      let isPrime = true;
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          isPrime = false;
          break;
        }
      }
      setResult(isPrime ? 'Prime' : 'Composite');
    }
  };

  return (
    <div>
      <h1>Simple Calculator</h1>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />
      <button onClick={handleAddition}>Add</button>
      <button onClick={handleSubtraction}>Subtract</button>
      <button onClick={handleMultiplication}>Multiply</button>
      <button onClick={handleDivision}>Divide</button>
      <button onClick={isEvenOrOdd}>Check Even/Odd</button>
      <button onClick={isPrimeOrComposite}>Check Prime/Composite</button>
      <h2>Result: {result}</h2>
    </div>
  );
};

export default Calculator;
