import { getMovie, getVehicles } from './api-helper.js'
import { movieData, vehicleData } from './mockData.js'

describe('api-helper', () => {
  describe('getMovie', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(movieData),
        ok: true
      })) 
    })

    it('should make a fetch call for movies', async () => {
      const getMovieParams = 'https://swapi.co/api/films/'
      await getMovie()
      expect(window.fetch).toHaveBeenCalledWith(getMovieParams)
    })

    it('should return an object with movie data', async () => {
      const expectedMovieObject = movieData;
      const results = await getMovie()
      expect(results).toEqual(movieData)
    })

    it('should throw an error if the fetch fails', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: false
      }))
      await expect(getMovie()).toEqual(Promise.resolve({}))
    })

  })

  describe('getVehicles', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(vehicleData),
        ok: true
      })) 
    })

    it('should make a fetch call for vehicles', async () => {
      const getVehicleParams = 'https://swapi.co/api/vehicles/'
      await getVehicles()
      expect(window.fetch).toHaveBeenCalledWith(getVehicleParams)
    })

    it('should return an object with vehicle data', async () => {
      const expectedVehicleObject = vehicleData.results;
      const results = await getVehicles();
      expect(results).toEqual(expectedVehicleObject)
    })

    it('should throw an error if the fetch fails', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: false
      }))
      await expect(getVehicles()).toEqual(Promise.resolve({}))
    })
  })

  describe('get')
})