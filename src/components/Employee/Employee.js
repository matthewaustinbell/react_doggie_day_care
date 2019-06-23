import React from 'react';
import employeeShape from '../../helpers/propz/employeeShape';
import './Employee.scss';

class Employee extends React.Component {
  static propTypes = {
    employee: employeeShape.employeeShape,
  }

  render() {
    const { employee } = this.props;

    return (
      <div className="Employee d-flex flex-row flex-wrap">
        <div className="card">
          <img className="card-img-top employee-header" src={employee.picture} alt={employee.name}/>
          <div className="card-body">
            <h5 className="card-title">{employee.name}</h5>
            <p className="card-text">{employee.about}</p>
            <p className="card-text">{employee.age}</p>
            <p className="card-text">{employee.email}</p>
            <p className="card-text">{employee.phone}</p>
            <p className="card-text">{employee.address}</p>
         </div>
        </div>
      </div>
    );
  }
}

export default Employee;
