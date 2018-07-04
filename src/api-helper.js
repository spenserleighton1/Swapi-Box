import { planetDataCleaner } from './helper.js'

export const getPeople = (url) => {
  fetch(url)
  .then(response => response.json())
  .then(data => fetchPeople(data.results))
  .then(next => fetchSpecies(next)) 
  .catch(error => console.log(error))
}

export const fetchPeople = (arr) => {
  const unresolvedPromises = arr.map(peep => {
    return fetch(peep.homeworld)
      .then(response => response.json())
      .then(homeworld => ({...peep, homeworld: homeworld.name, homeworldPopulation: homeworld.population }))        
  })
  return Promise.all(unresolvedPromises)
}

export const fetchSpecies = (arr) => {
  const unresolvedPromises = arr.map(peep => {
    return fetch(peep.species)
      .then(response => response.json())
      .then(species => ({...peep, species: species.name}))
  })
  return Promise.all(unresolvedPromises)
}


const getResidents = (arr) => {
    const unresolvedPromises = arr.map(planet => {
      return fetch(planet.residents)
              .then(response => response.json())
              .then(resident => planet.residents = [...resident.name])
    })
    return Promise.all(unresolvedPromises)
}

export const getPlanetData = (url) => {
  fetch(url)
    .then(response => response.json())
    .then(data => planetDataCleaner(data.results))
    .then(planets => getResidents(planets))
    // .then(log => console.log(log))
    .catch(error => console.log(error))
}









