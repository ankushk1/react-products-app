import React, { Component } from "react";

class ClassComp extends Component {
  constructor(props) {
    console.log('constructor called');
    super(props);
    this.state = {
      username: "ABC",
      age : 10,
    };
  }

  componentWillMount() {
    console.log('componentWillMount called');
  }

  componentDidMount(){
    console.log('componentDidMount called');
  }

  componentWillUpdate(){
    console.log('componentWillUpdate called');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate called')
  }

  handleChange() {
    this.setState({
      username: "XYZ",
    })
    console.log(this.state)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render');
    return (
      <div>
        <p> {this.state.username}</p>
        <p> {this.state.age}</p>
        <button onClick={() => this.handleChange()}>Click</button>
      </div>
    );
  }
}

export default ClassComp;



