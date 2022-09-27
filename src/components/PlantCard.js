import React, { useState } from "react";

function PlantCard({ plant:{id, name, image, price}, handleDelete, setPlants, plants }) {
  const [inStock, setInStock] = useState(true)
  const [updateP, setUpdateP] = useState("")

  function handleDelete(deletePlant){
    const deleted = plants.filter(plant => plant.id !== deletePlant)
    setPlants(deleted)
    fetch(`http://localhost:6001/plants/${deletePlant}`, {
      method: "DELETE",
      headers: {
        "Content-Type" : "application/json"
       }
      })
    }

  function handleFormSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:6001/plants/${id}`,{
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      }, 
      body: JSON.stringify({price: updateP})
    })
    .then(r => r.json())
    .then(updatedPlant => { 
      const patchedPlant = plants.map(plant =>  plant.id === id ? updatedPlant : plant) 
      setPlants(patchedPlant)
    })
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={() => setInStock(inStock => !inStock)}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
      <button onClick={() => handleDelete(id)} style={{ color: "red"}}>Remove</button>
      <form onSubmit={handleFormSubmit}>
          <input type="number" placeholder="Update Price" onChange={(e) => setUpdateP(e.target.value)}></input>
          <button>Update</button>
      </form>
    </li>
  );
}

export default PlantCard;
