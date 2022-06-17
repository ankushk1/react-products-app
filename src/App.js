import logo from "./logo.svg";
import "./App.css";
import ClassComp from "./Components/ClassComp";
import FuncComp from "./Components/FuncComp";
import Counter from "./Components/Counter";
import { useState, createContext } from "react";
import FormComp from "./Components/FormComp";
import ComponentA from "./Components/ComponentA";
import ApiComp from "./Components/ApiComp";
import UseReducer from "./Components/UseReducer";
import UseRefHook from "./Components/UseRefHook";
import Todo from "./Components/Todo";
import Modal from "./Components/Modal";
import UseFormComp from './Components/UseFormComp'
import UseFetchComp from "./Components/UseFetchComp";
import UseMemoHook from "./Components/UseMemoHook";
import UseCallbackHook from "./Components/UseCallbackHook";
import CounterHoverHOC from "./HOC/CounterHoverHOC";
import CounterClickHOC from "./HOC/CounterClickHOC";

// const str = "ABC";
const user = {
  name: "user 1",
  age: 20
};

export const messageContext = createContext(null)
function App() {
  const [count, setCount] = useState(1)
  const [mount, setMount] = useState(true)
  return (
    <div className="App">
      {/* {mount && <Counter/>}
      <button onClick={() => setMount(!mount)}>Unmount</button> */}
      {/* <p>Paragraph</p> */}
      {/* <FuncComp name={"Props ABC"} age={50} city="Delhi">
       <div>
         <h1>Children</h1>
       </div>
     </FuncComp> */}
      {/* {count}
      <Counter counter={count} setCount={setCount} /> */}
    {/* <FormComp/> */}
      {/* <messageContext.Provider value ={10}>
        <ComponentA />
      </messageContext.Provider> */}
      {/* <ApiComp/> */}
      {/* <Todo/> */}
      {/* <Modal/> */}
      {/* <UseFormComp/> */}
      {/* <UseFetchComp/> */}
      {/* <UseMemoHook/> */}
      {/* <UseCallbackHook/> */}
      <CounterClickHOC name = "abc"/>
      <CounterHoverHOC />
    </div>
  );
}

export default App;
