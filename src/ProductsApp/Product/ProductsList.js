import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { AllProducts } from "../../actions/productactions";
import { error, success } from "../../utils/toast";
import ProductsNavbar from "../ProductsNavbar";
import Product from "./Product";

const ProductsList = () => {
  const [productList, setProductList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const history = useHistory();
  const dispach = useDispatch();
  const productsSelector = useSelector(
    (state) => state?.productsData?.products
  );
  const [sort, setSort] = useState(true);
  
  useEffect(() => {
    dispach(AllProducts());
  }, []);

  useEffect(() => {
    if (productsSelector?.status === 200) {
      setProductList(productsSelector?.data?.productsData);
      // success(productsSelector?.data?.message);
    } else {
      error(productsSelector?.data?.message);
    }
  }, [productsSelector]);
  // console.log(productList)

  const searchHandler = () => {
    if (searchText === "") {
      setProductList(productsSelector?.data?.productsData);
      return;
    }
    const filteredData = productsSelector?.data?.productsData.filter(
      (product) => product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setProductList(filteredData);
  };

  useEffect(() => {
    if (searchText === "") {
      setProductList(productsSelector?.data?.productsData);
      return;
    }
    const filteredData = productsSelector?.data?.productsData.filter(
      (product) => product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setProductList(filteredData);
  }, [searchText]);

  function compare(a, b) {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }
    return 0;
  }

  const onSortHandler = () => {
    //for string  we can use localeCompare
    const sortedData = productsSelector?.data?.productsData.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    //for numbers we can use compare method
    // const sortedData = productsSelector?.data?.productsData.sort(compare)

    if (!sort) {
      setProductList(sortedData);
      setSort(!sort);
    } else {
      setProductList(sortedData.reverse());
      setSort(!sort);
    }
  };
  
  return (
    <div>
      <ProductsNavbar />
      <div className="container d-flex mt-3 justify-content-around">
        <div className="input-group mb-3 w-25">
          <input
            type="text"
            className="form-control "
            placeholder="Search"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <div className="ms-1 input-group-append" onClick={searchHandler}>
            <span className="input-group-text" id="basic-addon2">
              <i className="bi bi-search"></i>
            </span>
          </div>
        </div>
        <div>
          {sort && (
            <div
              className="btn"
              style={{ fontSize: "24px" }}
              onClick={() => onSortHandler()}
            >
              <i class="bi bi-sort-down"></i>
            </div>
          )}
          {!sort && (
            <div
              className="btn"
              style={{ fontSize: "24px" }}
              onClick={() => onSortHandler()}
            >
              <i class="bi bi-sort-up"></i>
            </div>
          )}
        </div>
      </div>
      <div className="container d-flex justify-content-center flex-wrap mx-5">
        {productList && productList.length > 0 ? (
          productList.map((product, idx) => (
            <Product
              product={product}
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
