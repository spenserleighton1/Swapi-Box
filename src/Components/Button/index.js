import React, { Component } from 'react';
import './styles.css'

class Button extends Component {
  constructor(props) {
    super(props)
  }
  
  handleClick = (e) => {
    e.preventDefault()

    switch(this.props.name) {
    case 'people':
        this.props.getPeople()
        break;
    case 'planets':
        this.props.getPlanets()
        break;
    case 'vehicles':
        this.props.getVehicles()
    default:
        console.log('error')
    }
  }

  render() {
    return(
      <button
        className="button"
        onClick={ this.handleClick }>{ this.props.name }</button>
      )
  }  
}

export default Button;
