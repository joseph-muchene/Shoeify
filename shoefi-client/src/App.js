import "./App.css";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import { motion, useScroll } from "framer-motion";
function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Header />
      <Products />
    </>
  );
}

export default App;
