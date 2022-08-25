import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header/Header";
import { BsArrowLeft } from "react-icons/bs";
import { Cart } from "../context/Reducer/CartReducer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import CartSlider from "../Components/Cart/CartSlider";

function ProductPage() {
  const { slug } = useParams();
  const { state, dispatch } = React.useContext(Cart);
  console.log(state);
  const [prod, _] = useState([...state.products]);
  const [product, setProduct] = useState({});
  useEffect(() => {
    setProduct(prod.find((prod) => prod.slug === slug));
  }, [prod, slug]);

  
  const Close_cart = () => {
    dispatch({
      type: "CLOSE_CART",
    });
  };
  const AddTocart = () => {
    // check if product exists
    if (!!state.cart.find((prod) => prod.id === product.id))
      return console.log("product already exists in the cart");
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };
  // console.log(dispatch);
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
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-lg  text-gray-400">tshirt</p>
            </div>

            <div className="text-sm px-4 py-2 border border-1 md:px-4 md:py-2 rounded-full bg-gray-200">
              <h2 className="text-xl">Ksh {product.price}</h2>
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
            src={product.imgUrl}
            alt="shopify-prod"
            className="h:60 md:h-60"
          />
        </div>

        <div className="my-3 flex justify-center ">
          <button
            onClick={AddTocart}
            className="bg-gray-400 p-2 w-60 rounded-md text-white hover:bg-gray-600 cursor-pointer"
          >
            Add to cart
          </button>
        </div>
      </div>
      {state.isOpen && <CartSlider closeCart={Close_cart} />}
    </div>
  );
}

export default ProductPage;
