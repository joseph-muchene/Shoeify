import "./App.css";
import { useContext } from "react";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import { motion, useScroll } from "framer-motion";
import CartSlider from "./Components/Cart/CartSlider";
import { Cart } from "./context/Reducer/CartReducer";
function App() {
  const { scrollYProgress } = useScroll();
  const { state, dispatch } = useContext(Cart);

  const Close_cart = () => {
    dispatch({
      type: "CLOSE_CART",
    });
  };
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      <Header />
      <Products />
      {state.isOpen && <CartSlider closeCart={Close_cart} />}
    </>
  );
}

export default App;
