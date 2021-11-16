import React from "react";

export default function Cart(props) {
  const { cartItems, onAdd, onRemove, clearAll } = props;


  return (
    <div>
      <h2 className="textCenter">Cart Items</h2>
      <hr />
      <div className="row">
        {cartItems.length === 0 && <div> Cart is Empty </div>}
      </div>
      <div className="row">
        <div>
          {cartItems.map((item) => {
            return (
              <div key={item.id} className="rowUpgrade">
                <div>{item.name}</div>
                <div>
                  <button onClick={() => onAdd(item)} className="buttonAdd">
                    +
                  </button>
                  <button
                    onClick={() => onRemove(item)}
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
          {cartItems.length !== 0 && (
            <>
              <div>
                <button onClick={() => clearAll()}>Clear all</button>
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
