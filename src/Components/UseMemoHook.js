import React, { useMemo, useState } from "react";

function factorial(n) {
  console.log("Factorial called");
  return n <= 0 ? 1 : n * factorial(n - 1);
}

const UseMemoHook = () => {
  const [number, setNumber] = useState(1);
  const [increment, setIncrement] = useState(0);

  const factorialOfNum = useMemo(() => factorial(number),
  [number]);

  const reRender = () => {
    setIncrement((increment) => increment + 1);
  };

  return (
    <div>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
        Factorial is - {factorialOfNum}
      </div>

      <button onClick={() => reRender()}>Render</button>
    </div>
  );
};

export default UseMemoHook;
