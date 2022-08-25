import React from "react";
import { useContext } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { Cart } from "../../context/Reducer/CartReducer";

function CartItem({ item }) {
  const { state, dispatch } = useContext(Cart);
  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };
  return (
    <div>
      <div className="flex space-x-10 place-items-center">
        <div className="px-2">
          <img
            src={item.imgUrl}
            alt=""
            srcset=""
            className="h-40 rounded-md object-contain items-center"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-lg hidden md:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            suscipit.
          </h2>

          <p className="text-lg">Quantiy:{item.quantity}</p>
        </div>

        <div className="flex gap-2">
          <div className="flex flex-col place-items-center">
            <BsChevronUp />
            <p>0</p>
            <BsChevronDown />
          </div>
          <div className="flex flex-col space-y-4 px-3">
            <div>
              <h2 className="font-semibold">Ksh {item.price}</h2>
            </div>
            <div>
              <button onClick={() => removeFromCart(item.id)}> Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
