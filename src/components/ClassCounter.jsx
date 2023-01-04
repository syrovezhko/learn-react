import React, { Component } from 'react'

export default class ClassCounter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);

  }

  increment () {
    this.setState({likes: this.state.likes += 1})
  }

  decrement () {
    this.setState({likes: this.state.likes -= 1})
  }
  render() {
    return (
      <div>
        <h1>{this.state.likes}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}

