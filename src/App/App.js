import React from 'react';
import './App.scss';
import dogData from './dog';
import Dog from '../components/Dog/Dog';

class App extends React.Component {
  state = {
    dog: [],
  }

  componentDidMount() {
    this.setState({ dogs: dogData });
  }

  render() {
    const { dogs } = this.state;

    return (
      <div className="App">
      <Dog dogs={dogs} />
      </div>
    );
  }
}

export default App;
