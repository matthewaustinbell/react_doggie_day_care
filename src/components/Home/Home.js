import React from 'react';

import './Home.scss';

import DogPen from '../Dog/DogPen/DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';
import walkData from '../../helpers/data/walkData';
import Walk from '../Walk/Walk';

class Home extends React.Component {
  state = {
    walks: [],
  }

  getWalks = () => {
    walkData.getWalks()
      .then(walks => this.setState({ walks }))
      .catch(err => console.error('no walks available', err));
  }

  componentDidMount() {
    this.getWalks();
  }

    deleteWalks = (walkId) => {
      walkData.deleteWalks(walkId)
        .then(() => this.getWalks())
        .catch(err => console.error('error with delete request', err));
    }

    render() {
      const walkComponents = this.state.walks.map(walk => (
        <Walk key={walk.id} walk={walk} deleteWalks={this.deleteWalks} />
      ));
      return (
        <div className="Home">
        <div><h2>Dogs</h2></div>
        <DogPen />
        <div><h2>Employees</h2></div>
        <StaffRoom />
        <div className="row">{walkComponents}</div>
      </div>
      );
    }
}

export default Home;
