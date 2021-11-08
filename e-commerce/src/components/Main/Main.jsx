import React from "react";
import Product from "../Product/Product";

export default function Main(props) {

  const { products, onAdd } = props;
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => {
          return <Product key={product.id} product={product} onAdd={onAdd}></Product>;
        })}
      </div>
    </main>
  );
}
