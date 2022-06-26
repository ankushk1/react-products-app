import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

const ProductsNavbar = (props) => {
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem("user")) ?? null
  );
  const history = useHistory();
  console.log(history);
  const signout = () => {
    history.push("/");
    localStorage.clear();
  };

  useEffect(() => {
    debugger;
    // setUser(localStorage.getItem("user"))
  }, [user]);
  console.log(user);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-6 d-flex justify-content-start">
          <h4>Home</h4>
        </div>
        {user && (
          <div className="col-6 ">
            <button className="btn btn-info me-3">Create Product</button>
            <button className="btn btn-success me-3">Cart</button>
            <button className="btn btn-danger" onClick={signout}>
              Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsNavbar;
