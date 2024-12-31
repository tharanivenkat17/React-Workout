import React from 'react'

export default function EmployeeDetails(props) {
  return (
    <div>
        <h1>Welcome To EmployeeDetails <br></br> Using Function Component</h1>
            <table border="4" class="table">
                <tr>
                    <th>Employee Id</th>
                    <th>Employee Name</th>
                    <th>Phone Number</th>
                    <th>Salary</th>
                    <th>Location</th>
                </tr>
                {
                    props.details.map((employee) =>(
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
