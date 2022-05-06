import React, { Component } from 'react'

export class PersonCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
        age: 0
    }
}
  render() {
      const { firstName, age, lastName, hairColor } = this.props
      
    return (
        <div>
          <h1>{lastName}, {firstName}</h1>
          <p>Age: {age+this.state.age}</p>
          <p>Hair Color: {hairColor}</p>
          <button onClick={() => this.setState({ age: this.state.age +1 })}>Add a year</button>
        </div>
    )
  }
}

export default PersonCard