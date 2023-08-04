import React, { useRef, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count); // Use of useRef it does no re-render , useState returns setCount so react detects the change and re renders it

  const handleIncrement = () => {
    countRef.current += 1;
    setCount(countRef.current);
    console.log(countRef);
  };

  const handleDecrement = () => {
    countRef.current -= 1;
    setCount(countRef.current);
    console.log(countRef);
  };

  return (
    <>
      <div>
        <p>Count : {count}</p>
        <button onClick={handleIncrement}>Click +</button> <br /> <br />
        <button onClick={handleDecrement}>Click -</button>
      </div>
    </>
  );
}
