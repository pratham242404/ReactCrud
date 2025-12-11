import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
export function Employee() {
    const [employee, setEmployee] = useState({});
    const { id } = useParams()
    console.log(useParams())
    useEffect(() => {
        fetch("https://localhost:7158/api/employee/" + id)
            .then(res => res.json())
            .then((result) => { setEmployee(result); }
            );
    }, []);
    return (
        <div><label>Id:</label>
            {employee.id}<br />
            <label>name:</label>
            {employee.name}<br />
            <label>Email:</label>
            {employee.email}<br />
            <label>Dpartment:</label>
            {employee.departmentId}
        </div>
    );
}
export default Employee;

