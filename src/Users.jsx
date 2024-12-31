import React, { Component } from 'react'
import axios from 'axios';

export class Users extends Component {

  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  getAllUsers() {
    axios.get("http://localhost:4200/user").then((response) => {
      console.log(response)
      this.setState({
        users: response.data
      }, () => { console.log(response) })

    }).catch((error) => {
      console.log("Unable to retrieve data");
    })
  }

  saveProduct() {
    var data = {
      "id": 5,
      "name": "Raghul",
      "username": "Raghul14",
      "email": "raghul@gmail.com"
    }

    axios.post("http://localhost:4200/user", data).then((response) => {
      console.log(response)

    }).catch((error) => {
      console.log("Unable to retrieve data");
    })

  }

  render() {
    const userData = this.state.users.map((item) => {
      return (<tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
      </tr>)
    })
    return (
      <div>
        <table>
          <thead>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
          </thead>
          <tbody>
            {userData}
          </tbody>
        </table>
        <button onClick={() => this.getAllUsers()}>Get All Products</button>
        <button onClick={() => this.saveProduct()}>Save Product</button>
      </div>
    )
  }
}

export default Users