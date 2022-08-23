import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header/Header";
import { BsArrowLeft } from "react-icons/bs";
function ProductPage() {
  return (
    <div>
      <Header />
      {/* product box */}
      <div className="mt-10 mb-10 mx-4 ">
        <h2 className="text-gray-400">
          <Link to="/" className="flex">
            <span className="mt-1.5 mr-2">
              <BsArrowLeft />
            </span>
            Back to shop
          </Link>
        </h2>
      </div>

      {/* contents */}

      <div className="flex flex-col  mx-4 md:grid grid-cols-2 place-items-center">
        <div>
          <div className="flex justify-between place-items-center ">
            <div className="flex flex-col space-y-3 mb-3">
              <h2 className="text-xl font-semibold">Deno Pocket Tee</h2>
              <p className="text-lg  text-gray-400">tshirt</p>
            </div>

            <div className="border border-1 px-4 py-2 rounded-full bg-gray-200">
              <h2 className="text-xl">$35.00</h2>
            </div>
          </div>

          <div className="my-3 mb-3">
            <h2 className="text-gray-400">Out of stock</h2>
            <p className="text-gray-500 mt-2">
              Ever wanted a little dinosaur in your pocket that will follow you
              around wherever you go? Look no further. Made with 100% cotton,
              this durable long sleeve tee is comfy and breathable.
            </p>
            {/*  */}
            <p className="mt-4 text-gray-400">
              Free shipping worldwide for orders over $35.
            </p>
          </div>
        </div>
        <div className="border-1 shadow p-3 md:mb-4 rounded-md">
          <img
            src="https://cdn.shopify.com/s/files/1/0582/2614/7460/products/denopockettee-white_blue_0c05a1bc-c94f-4555-b84d-b50dfd40aba3_400x400.png.webp?v=1658427860"
            alt="shopify-prod"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
