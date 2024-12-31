import React, { Component } from 'react'
import HOC from './HOC'

export class Button extends Component {
  render() {
    return (
      <div>
        {/* <h2>Count Increase in Class </h2> */}
        <button onClick={()=>this.props.change()}>Count Increase {this.props.number}</button>
      </div>
    )
  }
}

export default HOC(Button)