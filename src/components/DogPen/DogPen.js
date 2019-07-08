import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import './DogPen.scss';
import Dog from '../Dog/Dog';

class DogPen extends React.Component {
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
