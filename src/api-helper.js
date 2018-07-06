import { planetDataCleaner, scrollCleaner, vehicleCleaner } from './helper.js'

export const getPeople = () => {
  return fetch('https://swapi.co/api/people/')
  .then(response => response.json())
  .then(data => fetchPeople(data.results))
  .then(next => fetchSpecies(next)) 
  .catch(error => console.log(error))
}

const fetchPeople = (characters) => {
  const unresolvedPromises = characters.map(character => {
    return fetch(character.homeworld)
      .then(response => response.json())
      .then(homeworld => ({...character, homeworld: homeworld.name, homeworldPopulation: homeworld.population }))        
  })
  return Promise.all(unresolvedPromises)
}

const fetchSpecies = (characterSpecies) => {
  const unresolvedPromises = characterSpecies.map(character => {
    return fetch(character.species)
      .then(response => response.json())
      .then(species => ({...character, species: species.name}))
  })
  return Promise.all(unresolvedPromises)
}

export const getMovie = () => {
    return fetch('https://swapi.co/api/films/')
      .then(response => response.json())
      .then(data => scrollCleaner(data))
}

export const getPlanets = () => {
  return fetch('https://swapi.co/api/planets/')
    .then(response => response.json())
    .then(planets => planetDataCleaner(planets.results))
    .then(planetResidents => getResidents(planetResidents))
    .catch(error => console.log(error))
  }

const getResidents = (planets) => {
  const unresolvedPromises = planets.map(planet => {
    getResidentNames(planet.residents)
      .then(names => planet.residents = names)
    return planet;
  })
  return Promise.all(unresolvedPromises)
}

const getResidentNames = (residents) => {
  const unresolvedPromises = residents.map(resident => {
    return fetch(resident)
      .then(response => response.json())
      .then(resident => resident.name)
      .catch(error => console.log(error))
  })
  return Promise.all(unresolvedPromises)
}

export const getVehicles = () => {
  return fetch('https://swapi.co/api/vehicles/')
    .then(response => response.json())
    .then(data => vehicleCleaner(data.results))
    .catch(error => console.log(error))
}





