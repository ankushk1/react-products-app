import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Todo from "./Components/Todo";
import "./App.css";
import UseFetchComp from "./Components/UseFetchComp";
import ComponentA from "./Components/ComponentA";
import UseFormComp from "./Components/UseFormComp";
import ListItemsComp from "./Components/ListItemsComp";
import Counter from "./Components/Counter";
import Signup from "./ProductsApp/User/Signup";
import { ToastContainer } from "react-toastify";
import Signin from "./ProductsApp/User/Signin";
import ProductsList from "./ProductsApp/Product/ProductsList";
import ProductsNavbar from "./ProductsApp/ProductsNavbar";
import ProductCreate from "./ProductsApp/Product/ProductCreate";
import ProductDetails from "./ProductsApp/Product/ProductDetails";
import Cart from './ProductsApp/Product/Cart'
import CustomRoute from "./ProductsApp/CustomRoute";

const Routess = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        {/* <ProductsNavbar/> */}
        <Switch>
          <Route path="/" exact component={Signup} />
          <Route path="/signin" exact component={Signin} />
          <CustomRoute path="/products" exact component={ProductsList} />
          <CustomRoute path="/product-create" exact component={ProductCreate} />
          <CustomRoute path="/product-details" exact component={ProductDetails} />
          <CustomRoute path="/cart" exact component={Cart} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routess;
