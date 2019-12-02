import React from 'react';

const RegisterForm = () => {
    return(
        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="email" className="form-control" name="username" value="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" name="email" value="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <input type="text" className="form-control" name="fullname" value="" />
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
            {/*<div className="col-md-6">
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input type="text" className="form-control" name="location" value="" />
              </div>
            </div>*/}
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
    );
}

export default RegisterForm;