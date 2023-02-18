import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ProductsList from "./Products/ProductsList";
import ProductForm from "./Products/ProductForm";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductsList />
        <ProductForm />
      </div>
    </Provider>
  );
};

export default App;
