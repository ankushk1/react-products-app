import React from "react";
import { useHistory, useLocation } from "react-router";
import { success } from "../../utils/toast";

const ProductDetails = (props) => {
  const location = useLocation();
  const product = location.state.dataFromRoute;
  const history = useHistory();

  const onProductAdd = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) ?? [];
    cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    success("Product added to cart")
    history.push("/cart");
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-1">
            <button
              className="btn btn-outline-secondary"
              onClick={() => history.push("/products")}
            >
              Back
            </button>
          </div>
          <h1 className="col-10 Display-1">Product Details</h1>
          <div className="mt-4 d-flex justify-content-center">
            <div className="border border-dark w-50 bg-light">
              <div className="mt-4">
                <img width="200" height="200" src="/clothes.png" alt="Image" />
              </div>
              <div>
                <h4>Product name: {product.name}</h4>
              </div>
              <div>
                <h4>Product description: {product.description}</h4>
              </div>
              <div>
                <h4>Product price: ₹{product.price}</h4>
              </div>
              <button
                className="btn btn-warning my-4"
                onClick={() => onProductAdd()}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
