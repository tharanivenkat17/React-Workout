import React, { Component } from 'react'
import HOC from '../HOC'

export class Classcomponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
       count: 0,
       number: 0
    }
  }
  //Employee Name
  changeName(event){
    this.setState({
      name:event.target.value
    })
  }
  //Employee Id
  changeId(event){
    this.setState({
      id:event.target.value
    })
  }

  //Count Increment
  changeCount(){
    this.setState({
      count:this.state.count+1
    })
  }
  changeCount1(){
    this.setState({
      number:this.state.number+1
    })
  }
  
  render() {
    return (
      <div>
         {this.props.children}
        <table >
          <tr>  
            <td><h2>Your name {this.state.name}</h2></td>
            <td>
              <input type='text' name='username' placeholder='Enter Name' onChange={(event)=>this.changeName(event)}></input>
            </td>
          </tr>
          <tr>
            <td><h2>Your Employee Id {this.state.id}</h2></td>
            <td>
              <input type='number' id='id' placeholder='Enter Employee Id' onChange={(event)=>this.changeId(event)}></input>
            </td>
          </tr>
          {/* <tr>
            <td><h2>Count Increase in Class {this.state.count}</h2></td>
            <td>
              <button onClick={()=>this.changeCount()}>Count Increase</button>
            </td>
          </tr> */}
          <tr>
            <td><h2>Count Increase in Class </h2></td>
            <td>
              <button onClick={()=>this.props.changeCount()}>Count Increase {this.props.count}</button>
            </td>
          </tr>
          <tr>
            <td><h2>Count Increase in Class {this.state.number}</h2></td>
            <td>
              <label onMouseEnter={()=>this.changeCount1()}>Change Count</label>
            </td>
          </tr>
        </table>
      </div>
    )
  }
}

export default HOC(Classcomponent)