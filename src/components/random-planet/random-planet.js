import React, { Component } from 'react';

import swapiService from '../../services/swapi-service';

import './random-planet.css';
import Spiner from '../spiner/spiner';
import ErrorIndicator from '../error-indicator';

export default class RandomPlanet extends Component {

  swapiService = new swapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  }

  constructor() {
    super();

    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    })
  }

  onError = (err) => {
    this.setState({
      error: true
    })
  }

  updatePlanet() {
    // const id = Math.floor(Math.random() * 25) + 1;
    const id = 10000;
    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {

    const { planet, loading, error } = this.state;

    const content = error ? <ErrorIndicator /> : loading ? <Spiner /> : <PlanetView planet={planet} />;


    return (
      <div className="random-planet jumbotron rounded">
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {

  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
      <img className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt="" />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
