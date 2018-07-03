import React, { Component } from 'react';
import { asideDataCleaner } from '../../helper.js'
import Header from '../Header'
import Aside from '../Aside'
import './styles.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      asideData: {}
    }
  }

  componentDidMount() {
    this.getMovie('https://swapi.co/api/films/')
  }

  newState = (data) => {
    this.setState({
      asideData: asideDataCleaner(data)
    })
  }

  getMovie = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => this.newState(data))
      .catch(() => {
        alert('Sorry, we could not find that location, please enter your search in the correct format');
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Aside movie={ this.state.asideData }/>
      </div>
    );
  }
}

export default App;
