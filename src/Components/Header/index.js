import React from 'react';
import Button from '../Button';
import './styles.css';

const Header = () => {
  return(
    <div className="header">
    <h1>Star Wars Somthing Box</h1>
      <Button name={"people"} />
      <Button name="planets" />
      <Button name="vehicles" />
    </div>
    )
}

export default Header;