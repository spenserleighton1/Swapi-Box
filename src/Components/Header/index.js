import React from 'react';
import Button from '../Button';
import './styles.css';

const Header = ({ getPeople }) => {
  return(
    <div className="header">
    <h1>Star Wars Somthing Box</h1>
      <Button name="people"
              getPeople={ getPeople } />
      <Button name="planets" />
      <Button name="vehicles" />
    </div>
    )
}

export default Header;