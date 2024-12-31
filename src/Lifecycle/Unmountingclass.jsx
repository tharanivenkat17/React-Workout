import React, { Component } from 'react';

class Unmountingclass extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('Component is rendered');
    return (
      <div>
        <p>Unmounting Component</p>
      </div>
    );
  }
}

export default Unmountingclass;
