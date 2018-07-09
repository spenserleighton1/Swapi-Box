import React from 'react';
import Card from '../Card';
import PropTypes from 'prop-types';
import './styles.css';

const CardContainer = ({ favorite, cards }) => {
  const renderedCards = cards.map((card, index) => {
    return <Card 
      info={card}
      favorite={favorite}
      key={index} />;
  });

  return (
    <div className="card-container">
      { renderedCards }
    </div>
  );
};

CardContainer.propTypes = {
  cards: PropTypes.array.isRequired,
  favorite: PropTypes.func
};

export default CardContainer;