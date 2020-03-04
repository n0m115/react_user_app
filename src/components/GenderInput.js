import React, { Component } from 'react';
import PropTypes from 'prop-types';

const gendersList = ['male', 'female', 'other'];

class GenderInput extends Component {

  render() {
    return(
      <div className="form-group">
        Gender
        <div className="radios">
          {gendersList.map((gender, index) => {
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

GenderInput.propTypes = {
  activeGender: PropTypes.oneOf(gendersList),
  onGenderChange: PropTypes.func.isRequired
}

export default GenderInput;