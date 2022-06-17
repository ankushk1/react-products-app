import React, { useCallback, useEffect, useState } from "react";

const UseCallbackHook = () => {
  const [counter, setCount] = useState(10);
  const [counter2, setCount2] = useState(10);

  const handleIncrement = () => {
    setCount(counter + 1);
  };

  const handleIncrement2 = useCallback((incNum) => {
    setCount2(counter2 + incNum);
  }, [counter2]);

  useEffect(() => {
    console.log("New function created");
  }, [handleIncrement2]);

  return (
    <div>
      <div>Count 1 - {counter}</div>
      <div>Count 2 - {counter2}</div>
      <button onClick={() => handleIncrement()}>Increment</button>
      <button onClick={() => handleIncrement2(2)}>Increment2</button>
    </div>
  );
};

export default UseCallbackHook;
