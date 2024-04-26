import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)
  function handleAddToCart() {
    setIsInCart(true)
  }

  const cartClass = isInCart ? "in-cart" : ""

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => handleAddToCart()}>{isInCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
