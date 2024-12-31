import { Axios } from 'axios';
import React, { Component } from 'react'

export class AxiosDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //userFields: Holds the values of form inputs
            userFields: {
                username: '',
                email: '',
                phone: '',
                position: ''
            },
            errorFields: {},
            users:[]
        };
        // bind(this) is used in class components to bind the method to the current instance of the class.
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleChange(event) {
        let field = this.state.userFields;
        field[event.target.name] = event.target.value //field[name]= value entered in value
        this.setState({
            userFields: field
        })
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

    submitForm(event) {
        event.preventDefault();
        var data = {
                "username": this.state.userFields.username,
                "email": this.state.userFields.email,
                "phone": this.state.userFields.phone,
                "position": this.state.userFields.position
        }
        axios.post("http://localhost:4200/user", data).then((response) => {
            console.log(response)
      
          }).catch((error) => {
            console.log("Unable to retrieve data");
          })
      
        if (this.validateForm()) { //if true all field should be clear
            let fields = {
                username: '',
                email: '',
                phone: '',
                position: ''
            };
            this.setState({
                userFields: fields,
            });
            alert("Form Submitted");
            console.log(`
            DETAILS ENTERED:
                Name: ${this.state.userFields.username}
                Email: ${this.state.userFields.email}
                Phone: ${this.state.userFields.phone}
                Position: ${this.state.userFields.position}`);
        }
    }
    validateForm() {
        let field = this.state.userFields;
        let error = {};
        let formValid = true;
        // Username must be alphabetic
        var usernamePattern = /^[a-zA-Z]+$/;
        if (!usernamePattern.test(field['username'])) {
            formValid = false;
            error['username'] = 'Username must only contain alphabets';
        }
        // Email is valid
        var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;
        if (!emailPattern.test(field['email'])) {
            formValid = false;
            error['email'] = 'Enter a valid email';
        }
        // Phone Should be a 10-digit number
        var phonePattern = /^\d{10}$/;
        if (!phonePattern.test(field['phone'])) {
            formValid = false;
            error['phone'] = 'Phone number must be 10 digits long';
        }
        // Position must be alphabetic
        var positionPattern = /^[a-zA-Z]+$/;
        if (!positionPattern.test(field['position'])) {
            formValid = false;
            error['position'] = 'Position must only contain alphabets';
        }
        this.setState({
            errorFields: error,
        })
        return formValid;
    }
    render() {
        return (
            <div>
                <h1>Controlled Forms</h1>

                <form onSubmit={this.submitForm} name="form" method='post'>
                    <table>
                        <tbody>
                            <tr>
                                <td><label htmlFor="username">User Name</label></td>
                                <td>
                                    <input type="text"
                                        className="border"
                                        name="username"
                                        id='username'
                                        value={this.state.userFields.username}
                                        placeholder='Enter User Name'
                                        onChange={this.handleChange}
                                        required
                                    />
                                    <span>{this.state.errorFields.username}</span>
                                </td>
                            </tr>
                            <tr>
                                <td><label htmlFor="email">Email Id</label></td>
                                <td>
                                    <input type="text"
                                        className="border" //css
                                        name="email" //input value
                                        id='email' //unique identification value
                                        value={this.state.userFields.email} //binding
                                        placeholder='Enter Email'
                                        onChange={this.handleChange} //handle the change in the input
                                        required //field should not be empty
                                    />
                                    <span>{this.state.errorFields.email}</span> 
                                </td>
                            </tr>
                            <tr>
                                <td><label htmlFor="phone">Phone Number</label></td>
                                <td>
                                    <input type="text"
                                        className="border"
                                        name="phone"
                                        id='phone'
                                        value={this.state.userFields.phone}
                                        placeholder='Enter Phone Number'
                                        onChange={this.handleChange}
                                        required
                                    />
                                    <span>{this.state.errorFields.phone}</span>
                                </td>
                            </tr>
                            <tr>
                                <td><label htmlFor="position">Position</label></td>
                                <td>
                                    <input type="text"
                                        className="border"
                                        name="position"
                                        id='position'
                                        value={this.state.userFields.position}
                                        placeholder='Enter Position'
                                        onChange={this.handleChange}
                                        required
                                    />
                                    <span>{this.state.errorFields.position}</span>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <input className="submit" type='submit' value=" Submit " />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <button onClick={() => this.getAllUsers()}>Get All Products</button>
            </div>
        )
    }
}

export default AxiosDemo