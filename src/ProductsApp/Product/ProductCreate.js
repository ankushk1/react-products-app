import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { AllProducts } from "../../actions/productactions";
import { createProduct, updateProduct } from "../../utils/ApiUtils";
import { error, success } from "../../utils/toast";
import { useForm } from "../../utils/UseForm";
import { useDispatch, useSelector } from "react-redux";

const ProductCreate = () => {
  const { values, handleChange, setValues } = useForm();
  const location = useLocation();
  const obj = location?.state?.productData;
  
  const dispatch = useDispatch();
  useEffect(() => {
    if (obj) {
      const productVals = { ...values };
      productVals.name = obj.name;
      productVals.description = obj.description;
      productVals.quantity = obj.quantity;
      productVals.price = obj.price;
      setValues(productVals);
    }
  }, [location?.state?.productData]);

  const history = useHistory();
  const handleSubmit = async () => {
    try {
      const res = await createProduct(values);
      if (res.status === 200) {
        success(res.data.message);
        resetInput();
      } else {
        error(res.data.message);
      }
      dispatch(AllProducts());
      history.push("/products")
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async () => {
    try {
      console.log(obj._id);
      const res = await updateProduct(obj._id, values);
      if (res.status === 200) {
        success(res.data.message);
      } else {
        error(res.data.message);
      }
      dispatch(AllProducts());
      history.push("/products")
    } catch (err) {
      console.log(err);
    }
  };

  const resetInput = () => {
    const inputFields = { ...values };
    Object.keys(inputFields).forEach((key) => {
      inputFields[key] = "";
    });
    setValues(inputFields);
  };
  return (
    <div>
      <div className="container  mt-5">
        <div className="row">
          <div className="col-1">
            <button
              className="btn btn-outline-info"
              onClick={() => history.push("/products")}
            >
              Back
            </button>
          </div>
          <div className="col-10 d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-muted">
              {obj ? "Update Product" : "Create Product"}
            </h1>
            <div className="mt-4 form-group w-50">
              {" "}
              <input
                type="text"
                value={values.name}
                name="name"
                placeholder="Product Name"
                onChange={handleChange}
                className="form-control"
              />
              <br />
              <input
                type="text"
                value={values.description}
                name="description"
                placeholder="Product Description"
                onChange={handleChange}
                className="form-control"
              />
              <br />
              <input
                type="number"
                value={values.quantity}
                name="quantity"
                placeholder="Product Quantity"
                onChange={handleChange}
                className="form-control"
              />
              <br />
              <input
                type="number"
                value={values.price}
                name="price"
                placeholder="Product Price"
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="mt-4">
            <button
              className="btn btn-outline-warning text-secondary"
              onClick={() => (obj ? handleUpdate() : handleSubmit())}
            >
              {obj ? "Update Product" : "Create Product"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
