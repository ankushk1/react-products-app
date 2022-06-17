import React, { useReducer } from "react";

const UseReducer = () => {
  const initialState = {
    counter: 0,
    counter2: {
      
    }
  };

  const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
      case "increment":
        return { ...state, counter: state.counter + action.value };
      case "increment2":
        return { ...state, counter2: state.counter2 + state.counter };
      case "decrement":
        return { ...state, counter: state.counter - action.value };
      default:
        return;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p> {state.counter}</p> <br />
      <p> {state.counter2}</p> <br />
      <button onClick={() => dispatch({ type: "increment", value: 2 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "increment2", value: 2 })}>
        Increment2
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 2 })}>
        Decrement
      </button>
    </div>
  );
};

export default UseReducer;

