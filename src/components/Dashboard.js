import React, {Component} from 'react';
import Pet from './Pet';

export class Dashboard extends Component {
  componentDidMount(){
    console.log('component mounted');
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