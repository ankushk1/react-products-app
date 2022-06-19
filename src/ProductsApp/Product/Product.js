import React from "react";

const Product = ({name, price, description}) => {
  return (
    <div>
      <div className="card mx-5 my-5" style={{width: "18rem"}}>
        <div className="card-body">

          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">₹{price}</h6>
          <p className="card-text">
            {description}
          </p>
          <button className="btn btn-outline-secondary">View Product</button>
          <button className="btn btn-warning ms-4">Add to cart</button>
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
