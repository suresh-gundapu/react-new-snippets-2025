import { useState, useEffect } from "react";

import UseDebounce from "./UseDebounce";

const ProductSearch = () => {
  let [search, setSearch] = useState("");
  let debouncedValue = UseDebounce(search);
  let [result, setResult] = useState([]);

  useEffect(() => {
    (async () => {
      let data = await fetch(
        `https://fakestoreapi.com/products?search=${debouncedValue}`
      );
      let dataJson = await data.json();
      setResult(dataJson);
    })();
  }, [debouncedValue]);
  return (
    <>
      <span>Enter Product Name:</span>
      <input
        type="text"
        name="product"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <br />

      <h3>Products</h3>

      <ul>
        {result.map((prod) => (
          <li key={prod.id}>{prod.title}</li>
        ))}
      </ul>
    </>
  );
};
export default ProductSearch;
