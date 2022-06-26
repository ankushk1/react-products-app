import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { AllProducts } from "../../actions/productactions";
import { error, success } from "../../utils/toast";
import ProductsNavbar from "../ProductsNavbar";
import Product from "./Product";

const ProductsList = () => {
  const [productList, setProductList] = useState([]);
  const history = useHistory();
  const dispach = useDispatch();
  const productsSelector = useSelector(
    (state) => state?.productsData?.products
  );
  useEffect(() => {
    dispach(AllProducts());
  }, []);

  useEffect(() => {
    if (productsSelector?.status === 200) {
      setProductList(productsSelector?.data?.productsData);
      success(productsSelector?.data?.message);
    } else {
      error(productsSelector?.data?.message);
    }
  }, [productsSelector]);
  // console.log(productList)
  return (
    <div>
      <ProductsNavbar/>
      <div className="container d-flex justify-content-center flex-wrap mx-5">
        {productList.length > 0 ? (
          productList.map((product, idx) => (
            <Product
              key={idx}
              name={product?.name}
              price={product?.price}
              description={product?.description}
            />
          ))
        ) : (
          <p className="container text-danger text-center">
            No product available
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
