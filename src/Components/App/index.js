import React, { Component } from 'react';
import { asideDataCleaner } from '../../helper.js'
import Header from '../Header'
import Aside from '../Aside'
import './styles.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      asideData: {},
      people: []
    }
  }

  componentDidMount() {
    this.getMovie('https://swapi.co/api/films/')
    this.getPeople('https://swapi.co/api/people/')
  }

  getPeople = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => this.deepFetch(data.results, 'homeworld') && this.deepFetch(data.results, 'species'))
    .then(people => this.setState({ people }))
  }

  deepFetch = (arr, str) => {
    const unresolvedPromises = arr.map(item => {
      return fetch(item[str])
        .then(response => response.json())
        .then(results => ({...item, [str]: results.name }))        
    })
    return Promise.all(unresolvedPromises)
  }

  getMovie = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
      asideData: asideDataCleaner(data)
    }))
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
