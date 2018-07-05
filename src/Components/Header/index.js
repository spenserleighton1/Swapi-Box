import React from 'react';
import Button from '../Button';
import './styles.css';

const Header = ({ getPeople, getPlanets, getVehicles }) => {
  return(
    <div className="header">
    <h1>Something about Star Wars?</h1>
      <Button name="people"
              get={ getPeople } />
      <Button name="planets"
              get={ getPlanets } />
      <Button name="vehicles"
              get={ getVehicles } />
    </div>
    )
}

export default Header;