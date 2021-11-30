import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeAll,
} from "../../redux/cart/cartActions";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector(state => state.cart.cart)  
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
                    onClick={() => dispatch(addToCart(item.id))}
                    className="buttonAdd"
                  >
                    +
                  </button>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
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
              <button onClick={() => dispatch(removeAll())}>Clear all</button>
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

export default Cart;
