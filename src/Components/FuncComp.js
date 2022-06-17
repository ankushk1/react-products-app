import React, { useState } from "react";
import ClassComp from "./ClassComp";

const FuncComp = (props) => {

  console.log(props);
  const {name, age, city, children} = props;

  const [user, setUser] = useState({
    name: name,
    age: 10,
    city:"Delhi"
  });
  
  const handleChange = () => {
    // setUser({...user, name:"XYZ", city:"Mumbai"})
    const curVal = {...user}
    curVal.city = "Mumbai"
    setUser(curVal)
  };

  return (
    <div>
      {user.name} <br />
      {age} <br />
      {city} <br />
      {children}
      <button onClick={() => handleChange()}>Click</button>
    </div>
  );
};

export default FuncComp;
