import React, { useRef, useState } from 'react';

const UncontrolledForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Name field: Required
    if (!nameRef.current.value) {
      newErrors.name = "Name is required";
    }else if(!/^[A-Za-z]+$/.test(nameRef.current.value)) {
      newErrors.name = "Please enter only alphabets ";
    }

    // Email field: Required and valid format
    if (!emailRef.current.value) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(emailRef.current.value)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password field: Required and minimum length
    if (!passwordRef.current.value) {
      newErrors.password = "Password is required";
    } else if (passwordRef.current.value.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
        if (this.validateForm()) { //if true all field should be clear
            let fields = {
                username: '',
                email: '',
                phone: '',
                position: ''
            };
          }
    if (validateForm()) {
      // Form is valid, proceed with form submission logic
      console.log('Form submitted successfully');
      // You can now use the refs to access form data
      console.log(nameRef.current.value);
      console.log(emailRef.current.value);
      console.log(passwordRef.current.value);
    }
  };

  return (
    <form onSubmit={handleSubmit} name="form" method='post'>
      <br />
      <table>
        <tbody>
          <tr>
            <td><label>Enter Name:</label></td>
            <td><input type="text" className="border" ref={nameRef} /></td>
            <td>{errors.name && <span>{errors.name}</span>}</td>
          </tr>
          <tr>
            <td><label>Email:</label></td>
            <td><input type="email" className="border" ref={emailRef} /></td>
            <td>{errors.email && <span>{errors.email}</span>}</td>
          </tr>
          <tr>
            <td><label>Password:</label></td>
            <td><input type="password" className="border" ref={passwordRef} /></td>
            <td>{errors.password && <span>{errors.password}</span>}</td>
          </tr>
          <tr>
            <td></td>
            <td><button type="submit" className="submit">Submit</button></td>
          </tr>
        </tbody>
      </table>
      
    </form>
  );
};

export default UncontrolledForm;
