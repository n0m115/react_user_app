import React from 'react';

import Navigation from './Navigation';
import Header from './Header';

const User = () => {
    return(
        <div className="container">
            {/*Component*/}
            <Header />
            <section>
            {/*Component*/}
            <Navigation />
            <h2>User</h2>
            <form>
                <div className="row">
                    <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="full_name">Full Name</label>
                        <input type="text" className="form-control" name="full_name" value="" />
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input type="text" className="form-control" name="age" value="" />
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <div className="radios">
                        Male <input type="radio" name="gender" value="Male" />
                        Female <input type="radio" name="gender" value="Female" />
                        Other <input type="radio" name="gender" value="Other" />
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

export default User;