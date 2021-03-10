import React, { Component } from 'react';

class PersonCard extends Component {
  render() {
    const {firstName, lastName, age, hairColor} = this.props;
    return (
      <ul class="list-unstyled">
        <li><h2>{lastName}, {firstName}</h2></li>
        <li>Age: {age}</li>
        <li>Hair Color: {hairColor}</li>
      </ul>
    );
  }
}

export default PersonCard;