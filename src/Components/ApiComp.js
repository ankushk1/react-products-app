import React, { useEffect, useState } from "react";

const ApiComp = () => {
  const [value, setValue] = useState("posts");
  const [data, setData] = useState([]);
  const [loading, showLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/${value}`)
      const data =await res.json()
      console.log(setData(data))
    })()
    showLoading(false);
  }, [value]);

  return (
    <div>
      <button onClick={() => setValue("posts")}>Posts</button>
      <button onClick={() => setValue("todos")}>Todos</button>
      <button onClick={() => setValue("albums")}>Albums</button>
        {loading ?  <p>Loading..</p> :  data.map((d) => (
          <div>
            <p>{d.id}</p>
            <p>{d.title}</p>
          </div>
        ))}
    </div>
  );
};

export default ApiComp;
