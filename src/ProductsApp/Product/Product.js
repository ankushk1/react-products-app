import React from "react";
import { useHistory } from "react-router";
import { success } from "../../utils/toast";

const Product = ({name, price, description, product}) => {

  const history = useHistory()

  const onProductAdd = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) ?? [];
    cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    // history.push("/cart");
    success("Product added to cart")
  };

  return (
    <div>
      <div className="card mx-5 my-5" style={{width: "18rem"}}>
        <div className="card-body">

          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">₹{price}</h6>
          <p className="card-text">
            {description}
          </p>
          <button className="btn btn-outline-secondary" onClick={() => history.push('/product-details' , {dataFromRoute:product})}>View Product</button>
          <button className="btn btn-warning ms-4" onClick={() => onProductAdd()}>Add to cart</button>
          {/* <a href="#" class="card-link">
            Card link
          </a>
          <a href="#" class="card-link">
            Another link
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Product;
