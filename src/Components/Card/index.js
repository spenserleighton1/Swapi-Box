import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Card = ({ info, favorite }) => {
  if (info.species) {
    return (
      <div className="card">
        <h3>{ info.name }</h3>
        <p>species: { info.species }</p>
        <p>home world: { info.homeworld } population: { info.homeworldPopulation }</p>
        <button
          className="card-button"
          onClick={ () => { favorite(info.name); } }>favorite</button>
      </div>
    );
  }

  if (info.terrain) {
    return (
      <div className="card">
        <h3>{ info.name }</h3>
        <p>population: { info.population }</p>
        <p>terrain: { info.terrain }</p>
        <p>climate: { info.climate }</p>
        <p>residents: { info.residents.join(', ')}</p>
        <button
          className="card-button"
          onClick={ () => { favorite(info.name); } }>favorite</button>
      </div>
    );
  }

  if (info.model) {
    return (
      <div className="card">
        <h3>{ info.name }</h3>
        <p>model: { info.model }</p>
        <p>class: { info.class }</p>
        <p>passengers: { info.numOfPassengers }</p>
        <button
          className="card-button"
          onClick={ () => { favorite(info.name); } }>favorite</button>
      </div>
    );
  }
};

Card.propTypes = {
  info: PropTypes.array.isRequired,
  favorite: PropTypes.func
};

export default Card;