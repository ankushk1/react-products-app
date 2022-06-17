import React, { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  useEffect(()=>{
    // console.log(inputRef)
    inputRef.current.value = "Input"
    inputRef.current.focus();
    inputRef.current.checked = true
    inputRef.current.className = "doc"
  }, [value])

  return (
    <div>
      <input type="text" value={value} ref={inputRef}
        onChange={(e)=>setValue(e.target.value)}
      />
    </div>
  );
};

export default UseRefHook;
