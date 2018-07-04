import React from 'react';
import './styles.css'


const Card = ({ name, species, homeworld, homeworldPopulation, favorite }) => {
  return (
    <div className="people-card">
      <h3>{ name }</h3>
      <p>species: { species }</p>
      <p>home world: { homeworld } population: { homeworldPopulation }</p>
      <button
        className="card-button"
        onClick={()=>{favorite(name)} }>favorite</button>
    </div>
    )
}

export default Card;