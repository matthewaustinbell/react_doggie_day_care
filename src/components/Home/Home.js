/* eslint-disable max-len */
import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

import './Home.scss';

import DogPen from '../Dog/DogPen/DogPen';
import dogData from '../../helpers/data/dogData';
import StaffRoom from '../StaffRoom/StaffRoom';
import employeeData from '../../helpers/data/employeeData';
import walkData from '../../helpers/data/walkData';
import Walk from '../Walk/Walk';
import WalkForm from '../WalkForm/WalkForm';


class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
    walks: [],
    walkModal: false,
    newWalk: {},
  }

  walkModalToggle = this.walkModalToggle.bind(this);

  walkModalToggle(e) {
    e.preventDefault();
    this.setState(prevState => ({
      walkModal: !prevState.walkModal,
    }));
  }

  getWalks = () => {
    walkData.getWalks()
      .then(walks => this.setState({ walks }))
      .catch(err => console.error('no walks available', err));
    employeeData.getemployees()
      .then(employees => this.setState({ employees }))
      .catch(err => console.error('no eomployees available', err));
  }

  componentDidMount() {
    dogData.getDogs()
      .then(dogs => this.setState({ dogs }))
      .catch(err => console.error('no dogs available', err));
    this.getWalks();
  }

    deleteWalks = (walkId) => {
      walkData.deleteWalks(walkId)
        .then(() => this.getWalks())
        .catch(err => console.error('error with delete request', err));
    }

    saveNewWalk = (dogName, employeeName) => {
      this.buildNewWalk(dogName, employeeName);
    }

    buildNewWalk = (dogName, employeeName) => {
      const newWalk = { walks: { ...this.state.newWalk }, dogName, employeeName };
      console.error(newWalk);
    }

    render() {
      const { dogs, employees, newWalk } = this.state;
      const walkComponents = this.state.walks.map(walk => (
        <Walk key={walk.id} walk={walk} deleteWalks={this.deleteWalks} />
      ));
      return (
        <div className="Home">
          <Button color="success" onClick={this.walkModalToggle}>New Walk</Button>
          <Modal isOpen={this.state.walkModal} toggle={this.walkModalToggle} className={this.props.className}>
            <ModalHeader toggle={this.walkModalToggle}>Add Employee to new walk</ModalHeader>
            <ModalBody>
              <WalkForm
                dogs= { dogs }
                employees={ employees }
                newWalk={ newWalk }
                saveNewWalk={this.saveNewWalk}
                />
            </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.walkModalToggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.walkModalToggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <div><h2>Dogs</h2></div>
        <DogPen dogs={ dogs }/>
        <div><h2>Employees</h2></div>
        <StaffRoom employees={ employees }/>
        <div className="row">{walkComponents}</div>
      </div>
      );
    }
}

export default Home;
