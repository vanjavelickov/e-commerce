import Main from "./components/Main/Main";

function App(props) {
  const { products, onAdd } = props;

  return (
    <div className="App">
      <div className="row">
        <Main onAdd={onAdd} products={products}></Main>
      </div>
    </div>
  );
}

export default App;
