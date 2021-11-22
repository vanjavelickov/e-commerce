import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeAll,
} from "../../redux/cart/cartActions";

function Cart({ cart, addToCart, removeFromCart, removeAll }) {
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="textCenter">Cart Items</h2>
      <hr />
      <div className="row">
        {cart.length === 0 && <div> Cart is Empty </div>}
      </div>
      <div className="row">
        <div>
          {cart.map((item, index) => {
            return (
              <div key={index} className="rowUpgrade">
                <div>{item.name}</div>
                <div>
                  <button
                    onClick={() => addToCart(item.id)}
                    className="buttonAdd"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="buttonRemove"
                  >
                    -
                  </button>
                </div>
                <div className="textRight">{item.quantity} x</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="row">
        {cart.length !== 0 && (
          <>
            <div>
              <button onClick={() => removeAll()}>Clear all</button>
            </div>
            <div className="row">
              <button onClick={() => alert("Checkout")}>Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    removeAll: () => dispatch(removeAll()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
