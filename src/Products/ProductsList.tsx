import React, { useState } from "react";

interface ProductsListProps {}

interface Product {
  title: string;
  price: number;
  id: string;
}

const initialProducts = [
  { title: "Escape From Tarkov", price: 60, id: "eft" },
  { title: "Huntdown", price: 70, id: "huny" },
  { title: "Hell From Tarkov", price: 55, id: "hell" },
];

const ProductsList: React.FC<ProductsListProps> = ({}) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  return (
    <div>
      <h2>Games List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>{`${product.title} : ${product.price}`}</span>
        </div>
      ))}
      <button
        onClick={() =>
          setProducts((prevProducts) => [
            {
              title: "Half Life",
              price: 100,
              id: "h1",
            },
            ...prevProducts,
          ])
        }
      >
        Add Product
      </button>
    </div>
  );
};

export default ProductsList;
