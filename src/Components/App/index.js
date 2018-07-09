import React, { Component } from 'react';
import { getPeople, getPlanets, getMovie, getVehicles } from '../../api-helper.js';
import { vehicleCleaner, scrollCleaner } from '../../helper.js';
import LandingPage from '../LandingPage';
import Header from '../Header';
import Aside from '../Aside';
import CardContainer from '../CardContainer';
import './styles.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      favorites: [],
      cards: []
    };
  }

  componentDidMount() {
    getMovie()
      .then(movieData => scrollCleaner(movieData))
      .then(movie => this.setState({ movie }));
  }

  peopleState = () => {
    getPeople().then(cards => this.setState({ cards }));
  } 

  planetState = () => {
    getPlanets().then(cards => {
      this.setState({ cards });
    });
  }

  vehicleState = () => {
    getVehicles()
      .then(vehicleData => vehicleCleaner(vehicleData))
      .then(cards => this.setState({ cards }));
  }

  favorite = (str) => {
    let favorites = this.state.cards.find(item => {
      if (item.name === str && !item.favorite) {
        item.favorite = true;
        return item;
      } 
    });
    this.setState({ favorites: [favorites, ...this.state.favorites] });
  }

  render() {
    if (!this.state.cards.length) { 
      return (
        <div className="App">
          <Header 
            getPeople={ this.peopleState }
            getPlanets={ this.planetState } 
            getVehicles= { this.vehicleState } />
          <Aside movie={ this.state.movie } />
          <LandingPage />
        </div>
      );
    } else {
      return (
        <div className="App">
          <button
            onClick={ ()=>{ this.setState({ cards: this.state.favorites }); }}>favorite</button>
          <Header 
            getPeople={ this.peopleState }
            getPlanets={ this.planetState } 
            getVehicles= { this.vehicleState } />
          <Aside movie={ this.state.movie } />
          <CardContainer 
            cards={ this.state.cards }
            favorite={ this.favorite } />
        </div>
      );
    }
  }
}

export default App;
