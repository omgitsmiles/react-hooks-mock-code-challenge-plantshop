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
   return plant.name.toLowerCase().includes(search.toLowerCase())
  })

 
  function newPlantFormSubmit(newPlant) {
    setPlants([...plants, newPlant])
  }

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

  return (
    <main>
      <NewPlantForm newPlantFormSubmit={newPlantFormSubmit}/>
      <Search setSearch={setSearch}/>
      <PlantList plants={searchPlants} handleDelete={handleDelete} setPlants={setPlants}/>
    </main>
  );
}

export default PlantPage;
