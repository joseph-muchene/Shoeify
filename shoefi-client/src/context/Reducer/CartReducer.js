import React from "react";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGE_CART_QUANTITY,
  OPEN_CART,
  CLOSE_CART,
} from "../Actions/types";
import products from "../../utils/products";
import { createContext } from "react";
import { useReducer } from "react";

export const Cart = createContext();
export const CartProvider = ({ children }) => {
  const initialState = {
    isOpen: false,
    cart: [],
    products: [...products],
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      case OPEN_CART:
        return {
          ...state,
          isOpen: true,
        };

      case CLOSE_CART:
        return {
          ...state,
          isOpen: false,
        };

      case REMOVE_FROM_CART:
        const newCart = [...state.cart];
        const filtered = newCart.filter(
          (prod) => prod.id !== action.payload.id
        );
        return (state.cart = filtered);

      case CHANGE_CART_QUANTITY:
        return {
          ...state,
          cart: state.cart.filter((product) =>
            product.id === action.payload.id
              ? (product.quantiy = action.payload.quantity)
              : product.quantity
          ),
        };

      default:
        return state;
    }
  };

  // cart context
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};
