import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "../../App";
import Cart from "../Cart/Cart";
import { useState, useEffect } from "react";
import GetProducts from "../../hooks/GetProducts";
import { connect } from "react-redux";

function Container({ cart }) {
  const [products, setProducts] = GetProducts();
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.quantity;
    });
    setCartItems(count);
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart, cartItems]);

  return (
    <Router>
      <header>
        <div className="header">
          <div>
            <Link className="title" to="/">
              Shopping Cart
            </Link>
          </div>
          <div>
            <Link to="/cart">
              Cart{" "}
              <button className="buttonBadge">
                <span>{cart.length}</span>
              </button>
            </Link>
          </div>
        </div>
        <Routes>
          <Route
            exact
            path="/"
            element={<App products={products}></App>}
          ></Route>
          <Route path="/cart" element={<Cart cartItems={cart} />}></Route>
        </Routes>
      </header>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    // products: state.cart.cartReducer,
    cart: state.cart.cart,
  };
};

export default connect(mapStateToProps)(Container);
