import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import * as Api from '../Api';

import Navigation from './Navigation';
import Header from './Header';

class Users extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
      'users': []
    };
  }

  setUsers = () => {
    Api.getUsers()
    .then(users => {
      
      this.setState({
        users
      });
    })
    .catch(error => {
      console.log(error);
    });
  }
  
  handleDelete = event => {
    
    const curUserId = event.target.id;
    
    Api.deleteUser(curUserId)
    .then(user => {
      this.setUsers();
    })
    .catch(error => {
      console.log(error);
    });
  }

  componentDidMount() {
    this.setUsers();
  }

  render() {

    return (
      <div className="container">
        {/*Component*/}
        <Header />
        <section>
          {/*Component*/}
          <Navigation />
          <h2>User List</h2>
          {/*Component*/}
          <table className="table">
            <thead className="thead-dark">
              <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Location</th>
              <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map(user => (
                <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.fullname}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.location}</td>
                <td>
                <button type="button" className="btn btn-dark" onClick={this.handleDelete} id={user._id}>Delete</button>
                <NavLink to={`/user/${user._id}`} className="btn btn-dark">Edit</NavLink>
                </td>
                </tr>
                ))}
            </tbody>
          </table>
        </section>
      </div>
  )
};
}

export default Users;