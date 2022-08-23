import React from "react";

function Product() {
  return (
    <div className="mx-3 shadow mb-3 rounded ">
      <div className="mb-4">
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0582/2614/7460/products/kiss-cut-sticker-sheet-white-front-62c5b5d604ab6_400x400.jpg.webp?v=1657124314"
            alt=""
          />
        </div>

        <div className="flex justify-between gap-3 p-2 ">
          <h2 className="text-xl">Deno Sticker Sheet </h2>

          <h2 className="font-semibold">$10.00</h2>
        </div>
      </div>
    </div>
  );
}

export default Product;
