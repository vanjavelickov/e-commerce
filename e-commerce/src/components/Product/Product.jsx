import React from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cartActions";

function Product({ productData, addToCart }) {
  const dispatch = useDispatch();

  return (
    <div className="productItem">
      <h3>{productData.id}</h3>
      <div>{productData.name}</div>
      <div>${productData.rating}</div>
      <div>
        <button onClick={() => addToCart(productData.id)}>Add to Cart</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
