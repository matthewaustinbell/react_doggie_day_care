/* eslint-disable max-len */
import React from 'react';
import {
  Input,
  InputGroup,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from 'reactstrap';

import moment from 'moment';

class WalkForm extends React.Component {
  state = {
    dogsDropdownOpen: false,
    employeeDropdownOpen: false,
    dogName: 'Dogs To Walk',
    employeeName: 'Employee for Walk',
    date: '',
  }

   dogToggle = this.dogToggle.bind(this);

   employeeToggle = this.employeeToggle.bind(this);

dateChange = (e) => {
  e.preventDefault();
  this.setState({ date: e.target.value });
}

dogToggle(e) {
  e.preventDefault();
  this.setState(prevState => ({
    dogsDropdownOpen: !prevState.dogsDropdownOpen,
  }));
}

employeeToggle(e) {
  e.preventDefault();
  this.setState(prevState => ({
    employeeDropdownOpen: !prevState.employeeDropdownOpen,
  }));
}

   getDogName = (e) => {
     e.preventDefault();
     this.setState({ dogName: e.target.name });
   }

   getEmployeeName = (e) => {
     e.preventDefault();
     this.setState({ employee: e.target.name });
   }

   saveWalk = (e) => {
     e.preventDefault();
     this.props.saveNewWalk(this.state.dogName, this.state.employeeName, this.state.date);
   }

   render() {
     const dogOptions = this.props.dogs.map(dog => (
      <DropdownItem key={dog.id} name={dog.name} onClick={this.getDogName}>{dog.name}</DropdownItem>
     ));
     const employeeOptions = this.props.employees.map(employee => (
      <DropdownItem key={employee.id} onClick={this.getEmployeeName} name={employee.name}>{employee.name}</DropdownItem>
     ));
     return (
      <div>
      <UncontrolledDropdown isOpen={this.state.dogsDropdownOpen} onClick={this.dogToggle}>
      <DropdownToggle caret>{this.state.dogName}</DropdownToggle>
      <DropdownMenu>
          {dogOptions}
      </DropdownMenu>
      </UncontrolledDropdown>
      <InputGroup>
      <Input
        onChange={this.dateChange}
        placeholder="08/04/2019"
        />
      </InputGroup>
      <UncontrolledDropdown isOpen={this.state.employeeDropdownOpen} onClick={this.employeeToggle}>
      <DropdownToggle caret>{this.state.employeeName}</DropdownToggle>
      <DropdownMenu>
          {employeeOptions}
      </DropdownMenu>
      </UncontrolledDropdown>
      <InputGroup>
        <Input
        onChange={this.dateChange}
        placeholder="07/11/2019"
        />
      </InputGroup>
      <button className="btn btn-success" onClick={this.saveWalk}>Make New Walk</button>
      </div>
     );
   }
}

export default WalkForm;
