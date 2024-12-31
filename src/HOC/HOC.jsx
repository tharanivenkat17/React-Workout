import React, { Component } from 'react'
const HOC=(Original)=>{
    return class HOC extends Component {
        constructor(props) {
          super(props)
        
          this.state = {
             count: 0
          }
        }
        changeCount(){
            this.setState({
              count:this.state.count+1
            })
          }
      render() {
        return (
          <div>
            <Original number={this.state.count} change={()=>this.changeCount()}></Original>
          </div>
        )
      }
    }  
}
export default HOC