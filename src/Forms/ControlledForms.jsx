import React, { Component } from 'react'

export class ControlledForms extends Component {
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

    submitForm(event) {
        event.preventDefault();
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
                    <div className='Flex'>
                        <label htmlFor="username">User Name </label>
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
                    </div>
                    <div className='Flex'>
                        <label htmlFor="email">Email Id</label>
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
                    </div>
                    <div className='Flex'>
                        <label htmlFor="phone">Phone Number</label>
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
                    </div>

                    <div className='Flex'>
                        <label htmlFor="position">Position</label>
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
                    </div>

                    <input className="submit" type='submit' value=" Submit " />

                </form>
            </div>
        )
    }
}

export default ControlledForms