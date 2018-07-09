import { scrollCleaner, vehicleCleaner, peopleCleaner, planetDataCleaner } from './helper.js'
import { movieData, vehicleData, peopleData, planetData } from './mockData'

describe('scrollCleaner', () => {
  it('should take in data and spit out only what I ASK for', () => {
    const expected = {scroll: "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....", title: "A New Hope", year: "1977-05-25"}
    const actual = scrollCleaner(movieData)
    expect(Object.keys(actual)).toHaveLength(3)
  })
})

describe('vehicleCleaner', () => {
  it('should take in data and spit out only what I ASK for', () => {
    const expected = [ { name: 'Sand Crawler',
          model: 'Digger Crawler',
          class: 'wheeled',
          numOfPassengers: '30',
          favorite: false },
        { name: 'T-16 skyhopper',
          model: 'T-16 skyhopper',
          class: 'repulsorcraft',
          numOfPassengers: '1',
          favorite: false },
        { name: 'X-34 landspeeder',
          model: 'X-34 landspeeder',
          class: 'repulsorcraft',
          numOfPassengers: '1',
          favorite: false },
        { name: 'TIE/LN starfighter',
          model: 'Twin Ion Engine/Ln Starfighter',
          class: 'starfighter',
          numOfPassengers: '0',
          favorite: false },
        { name: 'Snowspeeder',
          model: 't-47 airspeeder',
          class: 'airspeeder',
          numOfPassengers: '0',
          favorite: false },
        { name: 'TIE bomber',
          model: 'TIE/sa bomber',
          class: 'space/planetary bomber',
          numOfPassengers: '0',
          favorite: false },
        { name: 'AT-AT',
          model: 'All Terrain Armored Transport',
          class: 'assault walker',
          numOfPassengers: '40',
          favorite: false },
        { name: 'AT-ST',
          model: 'All Terrain Scout Transport',
          class: 'walker',
          numOfPassengers: '0',
          favorite: false },
        { name: 'Storm IV Twin-Pod cloud car',
          model: 'Storm IV Twin-Pod',
          class: 'repulsorcraft',
          numOfPassengers: '0',
          favorite: false },
        { name: 'Sail barge',
          model: 'Modified Luxury Sail Barge',
          class: 'sail barge',
          numOfPassengers: '500',
          favorite: false }]

    const actual = vehicleCleaner(vehicleData.results)
    expect(actual).toEqual(expected)
  })
})

describe('peopleCleaner', () => {
  it('should return clean peopleData', () => {
    const expected = [{"homeworld": "https://swapi.co/api/planets/1/", "homeworldPopulation": undefined, "name": "Luke Skywalker", "species": ["https://swapi.co/api/species/1/"]}]
    const actual = peopleCleaner(peopleData.results)
    expect(actual).toEqual(expected)
  })
})

describe('planetDataCleaner', () => {
  it('should return clean  planetData', () => {
    const expected = [ { name: 'Alderaan',
          homeworld: undefined,
          species: undefined,
          homeworldPopulation: undefined },
        { name: 'Yavin IV',
          homeworld: undefined,
          species: undefined,
          homeworldPopulation: undefined },
        { name: 'Hoth',
          homeworld: undefined,
          species: undefined,
          homeworldPopulation: undefined },
        { name: 'Dagobah',
          homeworld: undefined,
          species: undefined,
          homeworldPopulation: undefined },
        { name: 'Bespin',
          homeworld: undefined,
          species: undefined,
          homeworldPopulation: undefined },
        { name: 'Endor',
          homeworld: undefined,
          species: undefined,
          homeworldPopulation: undefined },
        { name: 'Naboo',
          homeworld: undefined,
          species: undefined,
          homeworldPopulation: undefined },
        { name: 'Coruscant',
          homeworld: undefined,
          species: undefined,
          homeworldPopulation: undefined },
        { name: 'Kamino',
          homeworld: undefined,
          species: undefined,
          homeworldPopulation: undefined },
        { name: 'Geonosis',
          homeworld: undefined,
          species: undefined,
          homeworldPopulation: undefined } ]    
    const actual = peopleCleaner(planetData.results)
    expect(actual).toEqual(expected)
  })
})
