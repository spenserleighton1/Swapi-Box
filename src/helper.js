import { getPlanet } from './api-helper.js'

export const asideDataCleaner = data => (
  // const num = Math.floor(Math.random()*(data.count));
    { scroll: data.results[Math.floor(Math.random()*(data.count))].opening_crawl,
      title: data.results[Math.floor(Math.random()*(data.count))].title,
      year: data.results[Math.floor(Math.random()*(data.count))].release_date
    });

export const planetDataCleaner = data => {
  let cd = data.map(planet => ({
    name: planet.name,
    population: planet.population,
    terrain: planet.terrain,
    climate: planet.climate,
    residents: planet.residents
  }))
return cd
}





