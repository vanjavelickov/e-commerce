import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "../../App";
import Cart from "../Cart/Cart";
import { useState, useEffect } from "react";
import GetProducts from "../../hooks/GetProducts";
import { setProductsToPage } from "../../redux/cart/cartActions";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import PrivateRoute from "../../routes/PrivateRoutes";
import PublicRoute from "../../routes/PublicRoute";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


function Container() {
  let [products, setProducts] = GetProducts();
  const [cartItems, setCartItems] = useState(0);
  const cart = useSelector(state => state.cart.cart)  
  const dispatch = useDispatch();


  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.quantity;
    });
    setCartItems(count);
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart, cartItems]);

  dispatch(setProductsToPage(products))
  return (
    <Router>
      <Fragment>
      <header>
        <div className="header">
          <div>
            <Link className="title" to="/products">
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
          <div> <Link className="title" to="/signin">Sign in</Link>
            </div>
        </div>
        <Routes>
        <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact path='/products' element={<App products={products}/>}/>
        </Route>
        <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact path='/cart' element={<Cart cartItems={cart}/>}/>
        </Route>
        
        <Route exact path='/' element={<PublicRoute restricted={false}/>}>
            <Route exact path='/signup' element={<SignUp/>}/>
        </Route>
        <Route exact path='/' element={<PublicRoute restricted={false}/> } >
            <Route exact path='/signin' element={<SignIn/>}/>
        </Route>
        </Routes>
      </header>
      </Fragment>
    </Router>
  );
}

export default Container;
