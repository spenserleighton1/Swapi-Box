import React, { Component } from 'react';
import './styles.css'

class Button extends Component {
  constructor(props) {
    super(props)
  }
  
  handleClick = (e) => {
    e.preventDefault()
    // const name = e.target.name;
    // console.log(e.target)
    this.props.get()
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
