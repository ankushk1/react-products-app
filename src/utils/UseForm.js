import React, { useEffect, useState } from "react";

export const useForm = () => {
  const [values, setValues] = useState({});

  const handleChange = (event) => {
    console.log("handleChange called");
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("submitted");
  // };

  return {
    values,
    handleChange,
    // handleSubmit,
    setValues
  };
};

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const fetchApiData = () => {
    fetch('https://jsonplaceholder.typicode.com/tdos/1')
    .then(response => response.json())
    .then(json =>setData(json))
    .catch(err => console.log(err.message))
  };

  useEffect(() => {
    fetchApiData();
  }, [url]);

  return {
    data,
    error
  };
};
