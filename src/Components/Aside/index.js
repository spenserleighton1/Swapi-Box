import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Aside = ({ movie }) => {
  return (
    <div className="aside">
      <p>{ movie.scroll }</p>
      <p>{ movie.title }</p>
      <p>{ movie.year }</p>
    </div>
  );
};

Aside.propTypes = {
  movie: PropTypes.object.isRequired
};

export default Aside;