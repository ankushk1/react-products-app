import React from "react";
import { useHistory } from "react-router";
import { createProduct } from "../../utils/ApiUtils";
import { error, success } from "../../utils/toast";
import { useForm } from "../../utils/UseForm";

const ProductCreate = () => {
  const { values, handleChange, setValues } = useForm();

  const history = useHistory()
  const handleSubmit = async () => {
    const res = await createProduct(values);
    console.log(res);
    if (res.status === 200) {
      success(res.data.message);
      resetInput()
    } else {
      error(res.data.message);
    }
  };

  const resetInput = () => { 
    const inputFields = {...values}
    Object.keys(inputFields).forEach(key =>{
      inputFields[key] = ""
    })
    setValues(inputFields)
  }
  return (
    <div>
      <div className="container  mt-5">
        <div className="row">
          <div className="col-1">
            <button className="btn btn-outline-info" onClick={()=> history.push('/products')}>Back</button>
          </div>
          <div className="col-10 d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-muted">Create Product</h1>
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
              onClick={() => handleSubmit()}
            >
              Create Product
            </button>
            <button onClick={() => resetInput()}>
              reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
