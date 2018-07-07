
export const scrollCleaner = data => (
    { scroll: data.results[Math.floor(Math.random()*(data.count))].opening_crawl,
      title: data.results[Math.floor(Math.random()*(data.count))].title,
      year: data.results[Math.floor(Math.random()*(data.count))].release_date
    });

export const planetDataCleaner = data => {
  return data.map(planet => {
    return {
      name: planet.name,
      population: planet.population,
      terrain: planet.terrain,
      climate: planet.climate,
      residents: planet.residents,
      favorite: false
    }
  })
}

export const vehicleCleaner = vehicles => {
  return vehicles.map(vehicle => ({
    name: vehicle.name,
    model: vehicle.model,
    class: vehicle.vehicle_class,
    numOfPassengers: vehicle.passengers,
    favorite: false
  }))
}

export const peopleCleaner = people => {
  return people.map(person => ({
    name: person.name,
    homeworld: person.homeworld,
    species: person.species,
    homeworldPopulation: person.homeworldPopulation
  }))
}



