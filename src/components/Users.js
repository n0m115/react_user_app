import React from 'react';
import { NavLink } from 'react-router-dom';

import Navigation from './Navigation';
import Header from './Header';

const Users = () => {
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
              <tr>
                <td>5bb34d641fd7b7779f9678b4</td>
                <td>Noman</td>
                <td>nomi</td>
                <td>noman@gmail.com</td>
                <td>25</td>
                <td>Male</td>
                <td>Lahore</td>
                <td>
                  <button type="button" className="btn btn-dark linkdeleteuser" rel="5bb34d641fd7b7779f9678b4">Delete</button>
                  <NavLink to="/user/1" className="btn btn-dark loadedituser">Edit</NavLink>
                </td>
              </tr>
              <tr>
                <td>5bb355661b57d17edabf2a91</td>
                <td>Kamran</td>
                <td>kami</td>
                <td>kamran@gmail.com</td>
                <td>29</td>
                <td>Male</td>
                <td>Lahore</td>
                <td>
                  <button type="button" className="btn btn-dark linkdeleteuser" rel="5bb355661b57d17edabf2a91">Delete</button>
                  <NavLink to="/user/2" className="btn btn-dark loadedituser">Edit</NavLink>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    );
}

export default Users;