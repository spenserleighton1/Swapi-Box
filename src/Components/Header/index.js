import React from 'react';
import Button from '../Button';
import './styles.css';

const Header = ({ getPeople, getPlanets, getVehicles }) => {
  return(
    <div className="header">
    <h1>Something about Star Wars?</h1>
      <Button name="people"
              getPeople={ getPeople } />
      <Button name="planets"
              getPlanets={ getPlanets } />
      <Button name="vehicles"
              getVehicles={ getVehicles } />
    </div>
    )
}

export default Header;