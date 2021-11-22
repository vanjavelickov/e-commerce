import React from "react";
import Product from "../Product/Product";

export default function Main({ products }) {
  return (
    <main>
      <p className="subtitle">Products</p>
      <div className="product">
        {products.map((product) => {
          return <Product key={product.id} productData={product}></Product>;
        })}
      </div>
    </main>
  );
}
