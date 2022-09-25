import React, { useState } from "react";

function Item({ name, category }) {

  const [isAdded, setIsAdded] = useState(false)

  function handleCart() {
    setIsAdded((isAdded) => !isAdded)
  }
  
  const liSit = isAdded ? "in-cart" : ""
  const butSit = isAdded ? "remove" : "add"

  return (
    <li className={liSit}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
        className={butSit} 
        onClick={handleCart} >
          {isAdded ? "Remove From Cart" :"Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
