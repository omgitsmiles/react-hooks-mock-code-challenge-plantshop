import React, { useState } from "react";

function PlantCard({ plant:{name, image, price} }) {
  const [inStock, setInStock] = useState(true)

  function handleClick() {
    setInStock(inStock => !inStock)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
