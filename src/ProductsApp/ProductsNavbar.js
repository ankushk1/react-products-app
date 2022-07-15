import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

const ProductsNavbar = (props) => {

  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem("user")) ?? null
  );

  const history = useHistory();
  
  const signout = () => {
    history.push("/signin");
    localStorage.clear();
  };

  const onCreateProductHandler = () => {
    history.push('/product-create')
  }
  
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-6 d-flex justify-content-start">
          <h4>Product Store</h4>
        </div>
        {user && (
          <div className="col-6 ">
            {user.role === 'SA' && <button className="btn btn-info me-3" onClick={()=> onCreateProductHandler()}>Create Product</button>}
            <button className="btn btn-success me-3" onClick={()=> history.push('/cart')}>Cart</button>
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
