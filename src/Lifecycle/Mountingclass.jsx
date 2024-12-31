import React, { Component } from 'react'

export class Mountingclass extends Component {
    constructor(props) {
      super(props)
        console.log('Constructor')
        this.state = {
            count: 'Data Inserted'
         }
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.setState({
            count: 'Data Updated'
        })
    }
    
    render() {
        console.log('Component render');
        return (
            <div>
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}

export default Mountingclass