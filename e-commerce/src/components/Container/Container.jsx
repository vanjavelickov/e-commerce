import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "../../App";
import Cart from "../Cart/Cart";
import { useState, useEffect } from "react";
import GetProducts from "../../hooks/GetProducts";

export default function Container() {
  const [products, setProducts] = GetProducts();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartItemsArray = JSON.parse(localStorage.getItem("cartItems"));
    if (cartItemsArray) {
      setCartItems(cartItemsArray);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const onAdd = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };

  const clearAll = () => {
    setCartItems([]);
  };

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
              {cartItems.length ? (
                <button className="buttonBadge">{cartItems.length}</button>
              ) : (
                ""
              )}
            </Link>
          </div>
        </div>
        <Routes>
          <Route
            exact
            path="/"
            element={<App products={products} onAdd={onAdd}></App>}
          ></Route>
          <Route
            path="/cart"
            element={
              <Cart
                onAdd={onAdd}
                onRemove={onRemove}
                cartItems={cartItems}
                clearAll={clearAll}
              />
            }
          ></Route>
        </Routes>
      </header>
    </Router>
  );
}
