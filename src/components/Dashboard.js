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
          <Pet {...this.props.adoptableDog} onAdoptPet={this.handleAdopt}/>
          <Pet {...this.props.adoptableCat} onAdoptPet={this.handleAdopt}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  adoptableDog: Object.assign({} , state.dogReducer.dogs, {loading: state.dogReducer.loading}),
  adoptableCat: Object.assign({} , state.catReducer.cats, {loading: state.catReducer.loading})
})

export default connect(mapStateToProps)(Dashboard);