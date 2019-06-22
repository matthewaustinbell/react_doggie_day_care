import React from 'react';
import './App.scss';
import dogData from './dog';
import employeeData from './employees';
import Dog from '../components/Dog/Dog';
import Employee from '../components/Employee/Employee';

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
      <Dog dogs={dogs} />
      <Employee employees={employees} />
    </div>
    );
  }
}

export default App;
