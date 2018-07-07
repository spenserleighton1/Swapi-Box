import React from 'react';
import Card from '../Card';
import PropTypes from 'prop-types';
import './styles.css';

const CardContainer = ({ planets, people, vehicles, favorites, favorite, selected }) => {
  const peopleCards = people.map((person, index) => {
    return <Card className='people' person={ person } key={ index } favorite={ favorite } />;
  });

  const planetCards = planets.map((planet, index) => {
    return <Card className='planet' planet={ planet } key={ index } favorite={ favorite } />;
  });

  const vehicleCards = vehicles.map((vehicle, index) => {
    return <Card className='vehicle' vehicle={ vehicle } key={ index } favorite={ favorite } />;
  });

  const favs = favorites.map((vehicle, index) => {
    return <Card className='vehicle' vehicle={ vehicle } key={ index } favorite={ favorite } />;
  });

  const displayCards = (selected) => {
    let cards;
    if (selected === 'favorites') { cards = favs }
    if (selected === 'planets') { cards = planetCards; }
    if (selected === 'people') { cards = peopleCards; }
    if (selected === 'vehicles') { cards = vehicleCards; }
    return (

      <div className="card-container">
        { cards }
      </div>
    );
  };

  return displayCards(selected);
};

CardContainer.propTypes = {
  planets: PropTypes.array.isRequired,
  people: PropTypes.array.isRequired,
  vehicles: PropTypes.array.isRequired,
  favorites: PropTypes.array.isRequired,
  state: PropTypes.string.isRequired,
  favorite: PropTypes.func.isRequired
};


export default CardContainer;