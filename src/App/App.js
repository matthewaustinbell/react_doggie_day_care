import React from 'react';
import './App.scss';
import dogData from './dog';
import employeeData from './employees';
import DogPen from '../components/DogPen/DogPen';
import StaffRoom from '../components/StaffRoom/StaffRoom';

class App extends React.Component {
  state = {
    dogs: [],
    employees: [],
  }

  componentDidMount() {
    this.setState({
      dogs: dogData,
      employees: employeeData,
    });
  }

  render() {
    const { dogs } = this.state;
    const { employees } = this.state;

    return (
      <div className="App">
      <DogPen dogs={dogs} />
      <StaffRoom employees={employees} />
    </div>
    );
  }
}

export default App;
