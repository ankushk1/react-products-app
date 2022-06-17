import React, { useEffect } from "react";
import { signup } from "../../utils/ApiUtils";
import { useForm } from "../../utils/UseForm";
import { ToastContainer, toast } from "react-toastify";
import { error, success } from "../../utils/toast";
import { Link } from "react-router-dom";

const Signup = () => {
  const { values, handleChange } = useForm();
  const handleSubmit = async () => {
    const response = await signup(values);
    if (response.status === 200) {
      success(response.data.message);
    } else if (response.status === 404) {
      error("Wrong call");
    } else {
      error(response.data.message);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>Sign Up</h1>
      <div className="mt-3">
        {" "}
        <input
          type="text"
          value={values.firstname}
          name="firstname"
          placeholder="First Name"
          onChange={handleChange}
        />{" "}
        <br />
        <input
          type="text"
          value={values.lastname}
          name="lastname"
          placeholder="Last Name"
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          value={values.email}
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          value={values.password}
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </div>
      <div className="mt-4">
        <button className="btn btn-primary" onClick={() => handleSubmit()}>
          Sign up
        </button>
      </div>
      <div>
        <h3>Aready have an account.<Link className="text-primary" to="/signin"> SignIn</Link> here.</h3>
      </div>
    </div>
  );
};

export default Signup;
