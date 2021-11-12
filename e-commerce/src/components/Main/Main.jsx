import React from "react";
import Product from "../Product/Product";

export default function Main(props) {

  const { products, onAdd } = props;
  return (
    <main>
      <p className="subtitle">Products</p>
      <div className="product">
        {products.map((product) => {
          return <Product key={product.id} product={product} onAdd={onAdd}></Product>;
        })}
      </div>
    </main>
  );
}
