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

const Routess = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        {/* <ProductsNavbar/> */}
        <Switch>
          <Route path="/" exact component={Signup} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/products" exact component={ProductsList} />
          <Route path="/product-create" exact component={ProductCreate} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routess;
