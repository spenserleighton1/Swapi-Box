import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class Button extends Component {
  constructor(props) {
    super(props);
  }
  
  handleClick = event => {
    event.preventDefault();
    switch (this.props.name) {
      case 'people':
        this.props.getPeople();
        break;
      case 'planets':
        this.props.getPlanets();
        break;
      case 'vehicles':
        this.props.getVehicles();
        break;
      default:
        this.props.getVehicles();
    }
  }

  render() {
    return (
      <button
        className="button"
        onClick={ this.handleClick }>{ this.props.name }</button>
    );
  }  
}

Button.propTypes = {
  name: PropTypes.string,
  getPeople: PropTypes.func,
  getPlanets: PropTypes.func,
  getVehicles: PropTypes.func
};

export default Button;
