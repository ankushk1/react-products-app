import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllProducts } from "../../actions/productactions";
import { getAllProducts } from "../../utils/ApiUtils";
import { error, success } from "../../utils/toast";
import Product from "./Product";

const ProductsList = () => {
  const [productList, setProductList] = useState([]);
  const dispach = useDispatch();
  const data = useSelector((state) => state.productsData);

  useEffect(() => {
    dispach(AllProducts());
  }, []);

  useEffect(() => {
    if(data.products.status === 200){
      setProductList(data.products.data.productsData);
      success(data.products.data.message)
    } else{
      error(data.products.data.message)
    }
  }, [data]);
  console.log(productList)
  return ( 
    <div>
      <h1 className="mt-5">Products</h1>
      <div className="container d-flex justify-content-center flex-wrap mx-5">
         { productList.length > 0 ? productList.map((product, idx) => (
            <Product
              key={idx}
              name={product.name}
              price={product.price}
              description={product.description}
            />
          )) : <p className="container text-danger text-center">
          No product available
        </p> }
       
      </div>
    </div>
  );
};

export default ProductsList;
