import React from "react";
import { useFetch } from "../utils/UseForm";

const UseFetchComp = () => {
  const { data, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts`
  );
  return (
    <div>
      {data && data.map((d) => (
        <div>
          <p>{d.id}</p>
          <p>{d.title}</p>
        </div>
      ))}
    </div>
  );
};

export default UseFetchComp;
