import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store.hooks";
import { getProductsSelector, removeProduct } from "./products.slice";

const ProductsList: React.FC = () => {
  const products = useSelector(getProductsSelector);
  const dispatch = useAppDispatch();

  const removeFromStore = (id: string) => {
    dispatch(removeProduct(id));
  };

  return (
    <div>
      <h2>Games List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>{`${product.title} : ${product.price}`}</span>
          <button onClick={() => removeFromStore(product.id)}>
            Remove from the store
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
