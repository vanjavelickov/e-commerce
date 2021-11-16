import { useState, useEffect } from "react";

const GetProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://retoolapi.dev/3scGq6/products")
      .then((response) => {
        if (!response.ok) {
          console.log("no result");
          return;
        }
        response.json().then((response) => {
          setProducts(response);
        });
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);

  return [products, setProducts];
};

export default GetProducts;
