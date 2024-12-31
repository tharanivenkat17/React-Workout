// import React, { Component } from 'react';

// class Demo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       email: '',
//       password: '',
//       errors: {
//         name: '',
//         email: '',
//         password: '',
//       },
//       isFormValid: false,
//     };
//   }

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   validateForm = () => {
//     const { name, email, password } = this.state;
//     let errors = { name: '', email: '', password: '' };
//     let isFormValid = true;

//     // Validate Name
//     if (name === '') {
//       errors.name = 'Name is required.';
//       isFormValid = false;
//     } else if (password.length < 4) {
//       errors.password = 'Name must be at least 4 characters.';
//       isFormValid = false;
//     }


//     // Validate Email
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z-]+\.[a-zA-Z]{2,}$/;
//     if (email === '') {
//       errors.email = 'Email is required.';
//       isFormValid = false;
//     } else if (!emailRegex.test(email)) {
//       errors.email = 'Please enter a valid email address.';
//       isFormValid = false;
//     }

//     // Validate Password
//     if (password === '') {
//       errors.password = 'Password is required.';
//       isFormValid = false;
//     } else if (password.length < 8) {
//       errors.password = 'Password must be at least 6 characters.';
//       isFormValid = false;
//     }

//     this.setState({ errors, isFormValid });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.validateForm();

//     if (this.state.isFormValid) {
//       alert('Form submitted successfully');
//       console.log(' The Name you entered was:  ${name}')
//       console.log(' The Email you entered was:' ${email})
//       console.log(' The Password you entered was: ${password}')
//       // Submit form logic here (e.g., send data to the server)
//     }
//   };

//   render() {
//     const { name, email, password, errors } = this.state;

//     return (
//       <div>
//         <h2>Form Validation Example</h2>
//         <form onSubmit={this.handleSubmit}>
//           <div>
//             <label>Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.handleChange}
//             />
//             {errors.name && <p className="error">{errors.name}</p>}
//           </div>

//           <div>
//             <label>Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//             />
//             {errors.email && <p className="error">{errors.email}</p>}
//           </div>

//           <div>
//             <label>Password:</label>
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={this.handleChange}
//             />
//             {errors.password && <p className="error">{errors.password}</p>}
//           </div>

//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Demo;
