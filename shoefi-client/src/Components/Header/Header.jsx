import React from "react";
import { BsCart } from "react-icons/bs";
import { Cart } from "../../context/Reducer/CartReducer";
import { useContext } from "react";
function Header() {
  const { state, dispatch } = useContext(Cart);

  const openCart = () => {
    dispatch({
      type: "OPEN_CART",
    });
  };

  return (
    <div className="w-full bg-yellow-300">
      <div className="flex  justify-between gap-3 items-center mx-3">
        <div>
          <img
            src="https://merch.deno.com/logo.svg?__frsh_c=bkm5gnrqkdz0"
            alt=""
            srcset=""
          />
        </div>

        <div>
          <h2 className="text-2xl ">Shoefi</h2>
        </div>

        <div className="relative p-3">
          <span className="absolute top-0 right-0 text-xl italic ">
            {state.cart.length}
          </span>
          <button className="bg-[#eee] p-1 rounded-full" onClick={openCart}>
            <BsCart className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
