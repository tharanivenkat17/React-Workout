import React, { Component } from 'react'

export class Home extends Component {
  constructor(props) {
    super(props)
  
    // this.state = {
    //    first
    // }
  }
  render() {
    return (
      <div>
        Home Page
        <h1>{this.props.data}</h1>
        
        </div>
      
    )
  }
}

export default Home
    // <div>
    //     <h1> Welcome Page {props.name}</h1>
    //     <h2>Hello {props.id}</h2>
    // </div>
    // React.createElement('body',null,
    //   React.createElement('p',null, "Without JSX")
