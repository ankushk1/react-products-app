import React, { useState } from "react";
import { useHistory } from "react-router";

const Cart = () => {
  const [cartItems, setCartItems] = useState(() => {
    const cartItemsFromLC = JSON.parse(localStorage.getItem("cartItems")) ?? [];
    return cartItemsFromLC;
  });

  const history = useHistory();

  const onDeleteItem = (item) => {
    const updatedItems = cartItems.filter(cartItem => cartItem._id !== item._id)
    setCartItems(updatedItems)
    localStorage.setItem("cartItems", JSON.stringify(updatedItems))
  };

  const getTotalPrice = () => {
    let price = 0;
    cartItems.forEach((item) => (price += item.price));
    return price;
  };

  return (
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
        <h1 className="col-10 Display-1">Product Cart</h1>
      </div>
      <div className="row d-flex justify-content-center cart-height">
        {cartItems?.length > 0 &&
          cartItems.map((item) => (
            <>
              <div className="col-2"></div>
              <div className="col-8">
                <div className="row my-4 border border-dark p-4">
                <div className="col-1 d-flex justify-content-start">
                    <div className="row d-flex justify-content-start">
                    <img width="30" height="30" src="/clothes.png" alt="Image" />

                    </div>
                  </div>
                  <div className="col-4 d-flex justify-content-start">
                    <div className="row d-flex justify-content-start">
                      <h5>{item.name}</h5>
                    </div>
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                    <h5>₹{item.price}</h5>
                  </div>
                  <div className="col-1">
                    <button className="btn btn-danger p-1"  onClick={() => onDeleteItem(item)}>
                      <i class="bi bi-trash3"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-2"></div>
            </>
          ))}
      </div>
      <div className="row ">
        <h4 className="col-8 d-flex justify-content-start">
          Total Items : {cartItems.length}
        </h4>
        <h4 className="col-4">Total Price :{getTotalPrice()}</h4>
      </div>
    </div>
  );
};

export default Cart;
