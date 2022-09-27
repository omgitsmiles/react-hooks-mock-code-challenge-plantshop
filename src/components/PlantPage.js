import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(setPlants)
  }, [])


  const searchPlants = plants.filter(plant => {
  plant.name.toLowerCase().includes(search.toLowerCase()) 
  })

 
  function newPlantFormSubmit(newPlant) {
    setPlants([...plants, newPlant])
  }

  return (
    <main>
      <NewPlantForm newPlantFormSubmit={newPlantFormSubmit}/>
      <Search setSearch={setSearch}/>
      <PlantList plants={searchPlants}/>
    </main>
  );
}

export default PlantPage;
