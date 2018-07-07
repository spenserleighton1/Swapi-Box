import { planetDataCleaner, scrollCleaner, vehicleCleaner, peopleCleaner } from './helper.js'

export const getPeople = () => {
  return fetch('https://swapi.co/api/people/')
  .then(response => response.json())
  .then(data => fetchPeople(data.results))
  .then(next => fetchSpecies(next)) 
  .then(dirty => peopleCleaner(dirty))
  .catch(error => console.log(error))
}

const fetchPeople = (characters) => {
  const unresolvedPromises = characters.map(character => {
    return fetch(character.homeworld)
      .then(response => response.json())
      .then(homeworld => ({...character, homeworld: homeworld.name, homeworldPopulation: homeworld.population, favorite: false }))
      .catch(error => console.log(error))        
  })
  return Promise.all(unresolvedPromises)
}

const fetchSpecies = (characterSpecies) => {
  const unresolvedPromises = characterSpecies.map(character => {
    return fetch(character.species)
      .then(response => response.json())
      .then(species => ({...character, species: species.name}))
      .catch(error => console.log(error))
  })
  return Promise.all(unresolvedPromises)
}

export const getMovie = () => {
  return fetch('https://swapi.co/api/films/')
    .then(response => response.json())
    .then(data => data)
    .catch(error =>  Error('failed fetch'))
}

export const getPlanets = () => {
  return fetch('https://swapi.co/api/planets/')
    .then(response => response.json())
    .then(planets => planetDataCleaner(planets.results))
    .then(cleanPlanets => getResidents(cleanPlanets))
    .catch(error => console.log(error))
}

const getResidents = (planets) => {
  const unresolvedPromises = planets.map(planet => {
    return getResidentNames(planet.residents)
      .then(names => ({...planet, residents: names}))
      .catch(error => console.log(error))
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
    .then(results => results.results)
    .then(data => data)
    .catch(error => console.log(error))
}





