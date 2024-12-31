import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Employee from './EmployeeDetails/Employee';
import EmployeeDetails from './EmployeeDetails/EmployeeDetails';

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

export class Navigation extends Component {
    render() {
        return (
            <div>
                {/* <Router> */}
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/employee'}>Employee</Link>
                    </li>
                    <li>
                        <Link to={'/employeedetails'}>EmployeeDetails</Link>
                    </li>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/employee" element={<Employee />} />
                        <Route path="/employeedetails" element={<EmployeeDetails />} />
                    </Routes>
                {/* </Router> */}
            </div>
        )
    }
}

export default Navigation