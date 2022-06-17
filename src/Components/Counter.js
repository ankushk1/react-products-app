import React, { useState, useEffect, useLayoutEffect } from "react";

const Counter = () => {
  const [counter, setCount] = useState(10);
  const [counter2, setCount2] = useState(10);
  const handleIncrement = () => {
    setCount(counter + 1);
  };

  // useLayoutEffect(() => {
  //   setTimeout(()=>{
  //     console.log("useLayoutEffect running");
  //     setCount(counter + 2)
  //   }, 5000)
  // },[])

  // useEffect(() => {
  //   console.log("useEffect running");
  //   return () =>{
  //      console.log("unmount") 
  //   }
  // },[counter, counter2]);

  // useEffect(() => {
  //   console.log("useEffect2 running");
  // },[counter2]);

  return (
    <div>
      {console.log("render")}
      {counter} <br />
      <button onClick={() => handleIncrement()}>Increment</button>
      <button onClick={() =>setCount2(counter2+1)}>Increment2</button>
      <button disabled={counter < 1} onClick={() => setCount(counter - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
