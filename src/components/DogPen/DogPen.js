import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import './DogPen.scss';
import dogData from '../../../helpers/data/dogData';
import Dog from '../Dog/Dog';

class DogPen extends React.Component {
  state = {
    dogs: [],
  }

  componentDidMount() {
    dogData.getDogs()
      .then(dogs => this.setState({ dogs }))
      .catch(err => console.error('no dogs available', err));
  }

  render() {
    const dogComponents = this.state.dogs.map(d => (
      <Dog key={d.id} dog={d} />
    ));

    return (
      <div className="DogPen d-flex flex-row flex-wrap justify-content-around">
        {dogComponents}
      </div>
    );
  }
}

export default DogPen;
