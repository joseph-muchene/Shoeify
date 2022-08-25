import React from "react";
import Product from "./Product";
import { Cart } from "../../context/Reducer/CartReducer";
import { useState } from "react";
function Products() {
  const products = React.useContext(Cart);
  const [prod, _] = useState([...products.state.products]);
  console.log(prod);
  return (
    <div className="mt-20 place-items-center items-center  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
      {prod.map((c) => (
        <Product product={c} />
      ))}
    </div>
  );
}

export default Products;
