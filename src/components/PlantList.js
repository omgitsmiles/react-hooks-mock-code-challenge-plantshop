import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, handleDelete, setPlants }) {

  const renderPlants = plants.map(plant => (
    <PlantCard key={plant.id} plant={plant} handleDelete={handleDelete} plants={plants} setPlants={setPlants}/>
  ))

  return (
    <ul className="cards">{renderPlants}</ul>
  );
}

export default PlantList;
