import React from "react";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="productItem">
      <h3>{product.id}</h3>
      <div>{product.name}</div>
      <div>${product.rating}</div>
      <div>
        <button onClick={()=>{onAdd(product)}}>Add to Cart</button>
      </div>
    </div>
  );
}
