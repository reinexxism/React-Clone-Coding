import React, { useState } from "react";
import "../Styles/AppProducts.css";
import Products from "../components/Products";

export default function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);
  return (
    <div>
      {showProducts && <Products />}
      <button onClick={() => setShowProducts((show) => !show)}>
        Toggle Button
      </button>
    </div>
  );
}
