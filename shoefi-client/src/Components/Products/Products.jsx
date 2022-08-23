import React from "react";
import Product from "./Product";

function Products() {
  return (
    <div className="mt-20 place-items-center items-center  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}

export default Products;
