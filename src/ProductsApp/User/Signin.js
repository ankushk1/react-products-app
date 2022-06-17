import React from "react";
import { signin } from "../../utils/ApiUtils";
import { error, success } from "../../utils/toast";
import { useForm } from "../../utils/UseForm";

const Signin = () => {
  const { values, handleChange } = useForm();

  const handleSubmit = async () => {
    const response = await signin(values);
    if (response.status === 200) {
      localStorage.setItem('jwt_token', response.data.token)
      localStorage.setItem('user', JSON.stringify(response.data.user))
      success(response.data.message);
    } else if (response.status === 404) {
      error("Wrong call");
    } else {
      error(response.data.message);
    }
  }

  return (
    <div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1>Sign In</h1>
        <div className="mt-3">
          {" "}
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
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
