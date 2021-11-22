import Main from "./components/Main/Main";

function App({products}) {
  // const { products, onAdd } = props;

  return (
    <div className="App">
      <div className="row">
        <Main products={products}></Main>
      </div>
    </div>
  );
}

export default App;
