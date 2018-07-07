import React, { Component } from 'react';
import { getPeople, getPlanets, getMovie, getVehicles } from '../../api-helper.js'
import { vehicleCleaner, scrollCleaner } from '../../helper.js'
import LandingPage from '../LandingPage';
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
      vehicles: [],
      selected: ''
    }
  }

  componentDidMount() {
    getMovie()
      .then(data => scrollCleaner(data))
      .then(movie => this.setState({ movie }))
  }

  peopleState = () => {
    getPeople().then(people => this.setState({ people })) 
    this.setState({ selected: 'people'})
  } 

  planetState = () => {
    getPlanets().then(planets => {
      this.setState({ planets })
    })
    this.setState({ selected: 'planets'})
  }

  vehicleState = () => {
    getVehicles()
      .then(data => vehicleCleaner(data))
      .then(vehicles => this.setState({ vehicles }))
    this.setState({ selected: 'vehicles'})
  }

  favorite = (str, stateName) => {
    const favorite = this.state[stateName].find(item => {
      if (item.name === str) {
        item.favorite = !item.favorite
        return item
      } 
    })
    console.log(favorite)
    this.setState({ favorites: [favorite, ...this.state.favorites] })
  }

  removeFavorite = () => {

  }

  render() {
    return (
      <div className="App">
      <button
        onClick={() => {this.setState({selected: 'favorites' })} }>favorite</button>
        <Header 
          getPeople={ this.peopleState }
          getPlanets={ this.planetState } 
          getVehicles= { this.vehicleState } />

        <Aside movie={ this.state.movie } />

        <CardContainer 
          selected={ this.state.selected }
          favorites={ this.state.favorites }
          planets={ this.state.planets }
          people={ this.state.people }
          vehicles={ this.state.vehicles }
          favorite={ this.favorite } />
        <LandingPage />
      </div>
    );
  }
}

export default App;
