import React from "react";
import { useNavigate } from "react-router-dom";
function Product({ product }) {
  console.log(product);
  const { name, imgUrl, price, slug } = product;

  // handle redirect to product
  const navigate = useNavigate();
  const handleRedirect = (slug) => {
    navigate(`/product/${slug}`);
  };
  return (
    <div
      className="mx-3 shadow mb-3 rounded"
      onClick={() => handleRedirect(slug)}
    >
      <div className="mb-4">
        <div>
          <img src={imgUrl} alt="" />
        </div>

        <div className="flex justify-between gap-3 p-2 ">
          <h2 className="text-xl">{name.toLowerCase()} </h2>

          <h2 className="font-semibold">Ksh {price}</h2>
        </div>
      </div>
    </div>
  );
}

export default Product;
