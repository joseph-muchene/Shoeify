import React from "react";
import { BrowserRouter as Routing, Route, Routes } from "react-router-dom";
import App from "./App";
import ProductPage from "./Pages/ProductPage";
function Router() {
  return (
    <div>
      <Routing>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/product/:slug" element={<ProductPage />} />
        </Routes>
      </Routing>
    </div>
  );
}

export default Router;
