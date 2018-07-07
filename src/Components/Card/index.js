import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';


const Card = ({ person, planet, vehicle, favorite }) => {
  if (person) {
    return (
      <div className="card">
        <h3>{ person.name }</h3>
        <p>species: { person.species }</p>
        <p>home world: { person.homeworld } population: { person.homeworldPopulation }</p>
        <button
          className="card-button"
          onClick={ () => { favorite(person.name, 'people') } }>favorite</button>
      </div>
      )
  }

  if (planet) {
    return (
        <div className="card">
          <h3>{ planet.name }</h3>
          <p>population: { planet.population }</p>
          <p>terrain: { planet.terrain }</p>
          <p>climate: { planet.climate }</p>
          <p>residents: { planet.residents.join(', ')}</p>
          <button
            className="card-button"
            onClick={ () => { favorite(planet.name, 'planets') } }>favorite</button>
        </div>
      )
  }

  if (vehicle) {
    return (
        <div className="card">
          <h3>{ vehicle.name }</h3>
          <p>model: { vehicle.model }</p>
          <p>class: { vehicle.class }</p>
          <p>passengers: { vehicle.numOfPassengers }</p>
          <button
            className="card-button"
            onClick={ () => { favorite(vehicle.name, 'vehicles') } }>favorite</button>
        </div>
      )
  }
}

export default Card;