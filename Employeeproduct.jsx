import { Link } from "react-router-dom"
import React from "react";
import { useEffect, useState } from "react";
   

        function Employeeproduct() {
            const [employees, setEmployee] = useState([]);
            useEffect(() => {
                fetch("https://localhost:7158/api/employee")
                    .then(res => res.json())
                    .then((result) => { setEmployee(result); }
                    );
            }, []);

            return (
    <div>
        <h4><Link to="/create">Create</Link></h4>
        <h2>Employees Data...</h2>

        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Display</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>

            <tbody>
                {employees.map(emp => (
                    <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.email}</td>
                        <td>{emp.departmentId}</td>

                        <td><Link to={`/emp/${emp.id}`}>Display</Link></td>
                        <td><Link to={`/empup/${emp.id}`}>Edit</Link></td>
                        <td><Link to={`/empdel/${emp.id}`}>Delete</Link></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);


            
        }
    




        export default Employeeproduct;