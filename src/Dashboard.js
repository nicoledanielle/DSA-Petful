import React, {Component} from 'react';
import Pet from './Pet';

export class Dashboard extends Component {
  componentDidMount(){
    console.log('here');
  }

  render() {
    return (
      <div>
          <Pet adoptablePet={this.props.adoptableCat} />
          <Pet adoptablePet={this.props.adoptableDog} />
      </div>
    )
  }
}

export default Dashboard;