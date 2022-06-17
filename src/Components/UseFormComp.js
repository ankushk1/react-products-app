import React from "react";
import { useForm } from "../utils/UseForm";

const UseFormComp = () => {
  const { values, handleChange } = useForm();

  const handleSubmit = () => {

  }

  return (
    <div>
      <input
        type="text"
        value={values.firstname}
        name="firstname"
        onChange={handleChange}
      />
      <input
        type="text"
        value={values.lastname}
        name="lastname"
        onChange={handleChange}
      />
       <input
        type="email"
        value={values.email}
        name="email"
        onChange={handleChange}
      />
      <input
        type="password"
        value={values.password}
        name="password"
        onChange={handleChange}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UseFormComp;
