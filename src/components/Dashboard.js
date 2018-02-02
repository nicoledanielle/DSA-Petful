import React, {Component} from 'react';
import Pet from './Pet';
import {fetchCat, fetchDog} from '../actions';

export class Dashboard extends Component {
  componentDidMount(){
    this.props.dispatch(fetchDog());
    this.props.dispatch(fetchCat());
  }

  onAdoptPet(){
    console.log('pet adopted!');
  }

  render() {
    return (
      <div>
          <Pet adoptablePet={this.props.adoptableCat} onAdoptPet={this.onAdoptPet}/>
          <Pet adoptablePet={this.props.adoptableDog} onAdoptPet={this.onAdoptPet}/>
      </div>
    )
  }
}

export default Dashboard;