import React from 'react';

import './Home.scss';

import DogPen from '../DogPen/DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';
// import walkData from '../../helpers/data/walkData';
// import Walk from '../Walk/Walk';

import myDogs from '../../App/dog';
import myEmployees from '../../App/employees';

class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
  }

  componentDidMount() {
    this.setState({ dogs: myDogs });
    this.setState({ employees: myEmployees });
  }

  render() {
    const { dogs } = this.state;
    const { employees } = this.state;
    return (
      <div className="Home">
      <div><h2>Dogs</h2></div>
      <DogPen dogs={dogs}/>
       <div><h2>Employees</h2></div>
      <StaffRoom employees={employees}/>
    </div>
    );
  }
}

export default Home;
