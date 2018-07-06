// import { getPlanet } from './api-helper.js'

export const scrollCleaner = data => (
    { scroll: data.results[Math.floor(Math.random()*(data.count))].opening_crawl,
      title: data.results[Math.floor(Math.random()*(data.count))].title,
      year: data.results[Math.floor(Math.random()*(data.count))].release_date
    });

export const planetDataCleaner = data => {
  const planetData = data.map(planet => {
    return {
      name: planet.name,
      population: planet.population,
      terrain: planet.terrain,
      climate: planet.climate,
      residents: planet.residents
    }
  })
return planetData
}

export const vehicleCleaner = (vehicles) => {
  const vehicleData = vehicles.map(vehicle => ({
    name: vehicle.name,
    model: vehicle.model,
    class: vehicle.vehicle_class,
    numOfPassengers: vehicle.passengers
  }))
  return vehicleData
}




