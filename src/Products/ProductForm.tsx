import React, { useState } from "react";

interface ProductsListProps {}

interface Product {
  title: string;
  price: number;
  id: string;
}

const ProductForm: React.FC<ProductsListProps> = ({}) => {
  return (
    <>
      <h2>Add Game To The Store</h2>
      <form>
        <input type="text" placeholder="Game title" name="title" />
        <input type="text" placeholder="Price" name="price" />
        <input type="text" placeholder="Id" name="id" />
        <button>Add price</button>
      </form>
    </>
  );
};

export default ProductForm;
