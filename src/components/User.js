import React, { Component } from 'react';

import * as Api from '../Api';

import Navigation from './Navigation';
import Header from './Header';

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            '_id': '',
            'fullname': '',
            'age': '',
            'gender': ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        Api.updateUser(this.state)
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error);
        });
    }

    componentDidMount() {
        
        const curUserId = this.props.match.params.id
        
        Api.getUser(curUserId)
            .then(user => {
                this.setState({
                    '_id': user._id,
                    'fullname': user.fullname,
                    'age': user.age,
                    'gender': user.gender
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return(
            <div className="container">
                {/*Component*/}
                <Header />
                <section>
                {/*Component*/}
                <Navigation />
                <h2>User</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text" 
                            className="form-control" 
                            name="fullname" 
                            value={this.state.fullname} 
                            onChange={ this.handleInputChange } 
                            />
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="age">Age</label>
                            <input type="text" 
                            className="form-control" 
                            name="age" 
                            value={this.state.age} 
                            onChange={ this.handleInputChange }
                            />
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="gender">Gender</label>
                            <div className="radios">
                            Male 
                            <input 
                            type="radio" 
                            name="gender" 
                            value="male" 
                            checked={ this.state.gender === 'male' ? 'checked' : '' }
                            onChange={ this.handleInputChange }
                            />
                            Female 
                            <input 
                            type="radio" 
                            name="gender" 
                            value="female" 
                            checked={ this.state.gender === 'female' ? 'checked' : '' }
                            onChange={ this.handleInputChange }
                            />
                            Other 
                            <input 
                            type="radio" 
                            name="gender" 
                            value="other" 
                            checked={ this.state.gender === 'other' ? 'checked' : '' }
                            onChange={ this.handleInputChange }
                            />
                            </div>
                        </div>
                        </div>
                    </div>
                    <input type="hidden" name="user_action" value="add_user" />
                        <button type="submit" className="btn btn-dark">Submit</button>
                    </form>
                </section>
            </div>
        );
    }
}

export default User;