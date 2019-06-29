import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import dogShape from '../../helpers/propz/dogShape';
import './DogPen.scss';
import Dog from '../Dog/Dog';

class DogPen extends React.Component {
  static propTypes = {
    dogs: PropTypes.arrayOf(dogShape.dogShape),
  }

  render() {
    const { dogs } = this.props;
    const makeDogs = dogs.map(d => (
      <Dog key={d.id} dog={d} />
    ));

    return (
      <div className="DogPen d-flex flex-row flex-wrap justify-content-around">
        {makeDogs}
      </div>
    );
  }
}

export default DogPen;
