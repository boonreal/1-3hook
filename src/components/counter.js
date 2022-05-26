import React, {Component} from 'react';


export default class Counter extends Component {
  state = { count: 0 };

  Onchange1 = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  Onchange2 = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.Onchange1}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.Onchange2}>+</button>
      </div>
    );
  }
}