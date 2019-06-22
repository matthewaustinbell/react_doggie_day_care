import React from 'react';
import dogShape from '../../helpers/propz/dogShape';
import './Dog.scss';

class Dog extends React.Component {
  static propTypes = {
    dog: dogShape.dogShape,
  }

  render() {
  //  const { dog } = this.props;

    return (
      <div className="Dog border">
        This is a dog
      </div>
    );
  }
}

export default Dog;
