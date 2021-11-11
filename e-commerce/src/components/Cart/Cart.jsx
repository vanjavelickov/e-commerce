import React from "react";

export default function Cart(props) {
  const { cartItems, onAdd, onRemove, clearAll } = props;
  const itemsPrice = cartItems.reduce(
    (acc, curr) => acc + curr.rating * curr.qty,
    0
  );
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && <div> Cart is Empty </div>}</div>
      {cartItems.map((item) => {
        return (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
              <button onClick={() => onRemove(item)} className="add">
                -
              </button>
            </div>
            <div className="col-2 text-right">{item.qty} x</div>
          </div>
        );
      })}
      {cartItems.length !== 0 && (
        <>
          <hr />
          <div className="row">
            <div className="col-2">Items Price</div>
            <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Tax Price</div>
            <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Shipping Price</div>
            <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">
              <strong>Total Price</strong>
            </div>
            <div className="col-1 text-right">${totalPrice.toFixed(2)}</div>
          </div>
          <div>
            <button onClick={() => clearAll()}>Clear all</button>
          </div>
          <div className="row">
            <button onClick={() => alert("Checkout")}>Checkout</button>
          </div>
        </>
      )}
    </aside>
  );
}
