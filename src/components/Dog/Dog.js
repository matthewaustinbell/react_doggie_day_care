import React from 'react';
import dogShape from '../../helpers/propz/dogShape';
import './Dog.scss';

class Dog extends React.Component {
  static propTypes = {
    dog: dogShape.dogShape,
  }

  render() {
    const { dog } = this.props;

    return (
      <div className="Dog d-flex flex-row flex-wrap">
        <div className="card">
          <img className="card-img-top dog-header" src={dog.imageUrl} alt={dog.type}/>
          <div className="card-body">
            <h5 className="card-title">{dog.type}</h5>
            <p className="card-text">{dog.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dog;
