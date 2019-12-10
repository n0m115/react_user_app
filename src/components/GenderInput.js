import React, { Component } from 'react';

class GenderInput extends Component {

  // property to enlist genders
  gendersList = ['male', 'female', 'other'];

  render() {
    return(
      <div className="form-group">
        Gender
        <div className="radios">
          {this.gendersList.map((gender, index) => {
            return <label htmlFor="gender" key={ index }>
              {gender.charAt(0).toUpperCase() + gender.substr(1).toLowerCase()}
              <input 
              type="radio" 
              name="gender" 
              value={gender}
              checked={ this.props.activeGender === gender ? 'checked' : '' }
              onChange={ this.props.onGenderChange }
              />
            </label>;
          })}
        </div>
      </div>
    );
  }
}

export default GenderInput;