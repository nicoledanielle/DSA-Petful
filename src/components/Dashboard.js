import React, {Component} from 'react';
import Pet from './Pet';
import {fetchCat, fetchDog} from '../actions';
import {connect} from 'react-redux';

export class Dashboard extends Component {
  componentDidMount(){
    this.props.dispatch(fetchDog());
    this.props.dispatch(fetchCat());
    console.log('here');
  }

  handleAdopt(){
    console.log('pet adopted!');
  }

  render() {
    return (
      <div>
          {/* <Pet adoptablePet={this.props.adoptableCat} onAdoptPet={this.handleAdopt}/>
          <Pet adoptablePet={this.props.adoptableDog} onAdoptPet={this.handleAdopt}/> */}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  adoptableDog: state.dogs,
  adoptableCat: state.cats
})

export default connect(mapStateToProps)(Dashboard);