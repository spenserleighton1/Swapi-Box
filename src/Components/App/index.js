import React, { Component } from 'react';
import { asideDataCleaner, planetDataCleaner, vehicleCleaner } from '../../helper.js';
import { getPeople, getPlanets, getMovie, getVehicles } from '../../api-helper.js'
import Header from '../Header';
import Aside from '../Aside';
import CardContainer from '../CardContainer';
import './styles.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      movie: {},
      people: [],
      planets: [],
      favorites: [],
      vehicles: []
    }
  }

  componentDidMount() {
    getMovie().then(movie => this.setState({ movie }))
  }

  peopleState = () => {
    getPeople().then(people => this.setState({ people })) 
  } 

  planetState = () => {
    getPlanets().then(planets => this.setState({ planets }))
  }

  vehicleState = () => {
    getVehicles().then(vehicles => this.setState({ vehicles }))
  }

  favorite = (str) => {
    const favorite = this.state.people.find(item => {
      if(item.name === str) {
        return item.favorite = true
      } else {
        return item.favorite = false
      }
    })
    this.setState({ favorites: [favorite, ...this.state.favorites]})
  }

  render() {
    return (
      <div className="App">
        <Header 
          getPeople={ this.peopleState }
          getPlanets={ this.planetState } 
          getVehicles= { this.vehicleState } />
        <Aside movie={ this.state.movie } />
        <CardContainer 
          planets={ this.state.planets }
          people={ this.state.people }
          favorite={ this.favorite } />
      </div>
    );
  }
}

export default App;
