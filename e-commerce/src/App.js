import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Cart from "./components/Cart/Cart";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

useEffect(() => {
      fetch('https://retoolapi.dev/3scGq6/products')
          .then(response => {
              if (response.status !== 200) {
                  console.log('no result')
                  return;
              }
              response.json().then(response => {
                 console.log(response)
                 setProducts(response)
              });
          })
          .catch(err => {
              console.log('Error:', err);
          });
  }, [])
  

  // const { products } = data;
  const onAdd = (product) => {
    console.log(product)
    console.log(cartItems)
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <Header countCartItems = {cartItems.length}></Header>
      <div className="row">
        <Main onAdd={onAdd} products={products}></Main>
        <Cart onRemove={onRemove} onAdd={onAdd} cartItems={cartItems}></Cart>
      </div>
    </div>
  );
}

export default App;
