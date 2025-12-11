import React from 'react';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
export function Employeedel() {
    const [employee, setEmployee] = useState({});
    const { id } = useParams()
    const navigate = useNavigate();
    useEffect(() => {
        fetch("https://localhost:7158/api/employee/" + id)
            .then(res => res.json())
            .then((result) => { setEmployee(result); }
            );
    }, []);
    const handeldel = (event) => {
        fetch("https://localhost:7158/api/employee/" + id, {
            method: 'Delete'
        })
            .then(res => res)
            .then((result) => {
                console.log(result)
            });
        event.preventDefault();
        navigate('/');
    }

    return (
        <div>
            <h1 style={{ color: 'red' }}>R you sure</h1>
            <label>Id:</label>
            {employee.id}<br />
            <label>name:</label>
            {employee.name}<br />
            <label>Email:</label>
            {employee.email}<br />
            <label>Dpartment:</label>
            {employee.departmentId}
            <form onSubmit={handeldel}>
                <input type="submit" />
            </form>
        </div>
    );
}
export default Employeedel;

