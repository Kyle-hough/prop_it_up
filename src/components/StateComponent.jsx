import React, { Component } from 'react'

export class StateComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            age: 0
        }
    }
  render() {
    return (
      <div>
        <p>Age: {this.state.age}</p>
        <button onClick={() => this.setState({ age: this.state.age +1 })}>Add a year</button>
      </div>
    )
  }
}

export default StateComponent