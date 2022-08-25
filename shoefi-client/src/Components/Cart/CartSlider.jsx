import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Cart } from "../../context/Reducer/CartReducer";
import CartItem from "./CartItem";
function CartSlider({ closeCart }) {
  const { state, dispatch } = useContext(Cart);
  return (
    <div>
      <div className="overflow-y-scroll rounded-2xl shadow-lg  absolute top-16 right-0 bg-gray-200 w-full h-screen md:w-1/2  ">
        <h4 className="mx-4 my-4 text-lg font-semibold ">Shopping cart</h4>
        {state.cart.length < 1 && (
          <Link
            to="/"
            onClick={() =>
              dispatch({
                type: "CLOSE_CART",
              })
            }
          >
            <h3 className="mx-2 text-red-600">
              Cart is Empty.. proceed to shop
            </h3>
          </Link>
        )}

        <div className="relative">
          <span
            onClick={closeCart}
            className=" absolute bottom-3 text-xl right-10 cursor-pointer"
          >
            x
          </span>
        </div>
        {state.cart.map((c) => {
          return <CartItem item={c} key={c.id} />;
        })}
      </div>
    </div>
  );
}

export default CartSlider;
