import React, { Component } from 'react'
export class Employee extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>Welcome To EmployeeDetails<br></br> Using Class Component</h1>
                <table border="4" class="table">
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee Name</th>
                        <th>Phone Number</th>
                        <th>Salary</th>
                        <th>Location</th>
                    </tr>
                    {
                        this.props.data.map((employee) => (
                            <tr>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.salary}</td>
                                <td>{employee.location}</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        )
    }
}
// Employee.defaultProps ={
//    data:[
//     {
//         id : 'No',
//         name:'No Name Given',
//         phone: 'No',
//         salary: 'No',
//         location: 'No'
//     }
//    ] 
// };

export default Employee