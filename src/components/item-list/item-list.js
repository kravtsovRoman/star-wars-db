import React, { Component } from 'react';

import './item-list.css';
import SwapiService from '../../services/swapi-service';
import Spiner from '../spiner'

export default class ItemList extends Component {

  state = {
    peopleList: null
  }

  swapiServece = new SwapiService();

  componentDidMount() {
    this.swapiServece.getAllPeople()
      .then((peopleList) => {
        this.setState({
          peopleList
        })
      })
  }

  onItemSelected = () => {

  }

  render() {

    const { peopleList } = this.state;
    console.log(peopleList)

    if (!peopleList) {
      return <Spiner />
    }

    return (
      <ul className="item-list list-group">
        {
          peopleList.map((people, i) => {
            return (
              <li key={i + 1} onClick={this.onItemSelected(i)} className="list-group-item">
                {people.name}
              </li>
            )
          })
        }
      </ul>
    );
  }
}
