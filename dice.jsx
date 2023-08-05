import React, { useState } from "react";

export default function DiceRoll() {
  const getRandom = () => {
    const num = Math.ceil(Math.random() * 6);

    return num;
  };

  const [dice, setDice] = useState(getRandom());

  const handleDice = () => {
    setDice(getRandom);
  };

  return (
    <>
      <div>
        <p>Dice : {dice}</p>
        <button onClick={handleDice}>click</button>
      </div>
    </>
  );
}
