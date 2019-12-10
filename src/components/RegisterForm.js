import React, { Component } from 'react';

import * as Api from '../Api';

import GenderInput from './GenderInput';

class RegisterForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'username': '',
      'email': '',
      'fullname': '',
      'age': '',
      'location': '',
      'gender': ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    Api.addUser(this.state)
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input 
                type="text" 
                className="form-control" 
                name="username" 
                value={this.state.username} 
                onChange={this.handleInputChange}
                />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                className="form-control" 
                name="email" 
                value={this.state.email} 
                onChange={this.handleInputChange}
                />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="fullname">Full Name</label>
              <input 
                type="text" 
                className="form-control" 
                name="fullname" 
                value={this.state.fullname} 
                onChange={this.handleInputChange}
                />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input 
                type="text" 
                className="form-control" 
                name="age" 
                value={this.state.age} 
                onChange={this.handleInputChange}
                />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input 
                type="text" 
                className="form-control" 
                name="location" 
                value={this.state.location} 
                onChange={this.handleInputChange}
                />
            </div>
          </div>
          <div className="col-md-6">
            {/*Component*/}
            <GenderInput 
            activeGender={this.state.gender}
            onGenderChange={this.handleInputChange}
            />
          </div>
        </div>
        <input type="submit" className="btn btn-dark" value="Submit"/>
      </form>
    );
  }
}

export default RegisterForm;