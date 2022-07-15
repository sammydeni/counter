import React, { useState } from "react";
import Card from "../UI/Card";

const Counter = () => {
  const [counterVal, setCounterVal] = useState(0);

  const increase = () => {
    setCounterVal((val) => val + 1);
  };

  const decrease = () => {
    setCounterVal((val) => val - 1);
  };

  return (
    <Card>
      <h2>Counter</h2>
      <h1>{counterVal}</h1>
      <div>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
    </Card>
  );
};

export default Counter;
