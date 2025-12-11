import { useState } from "react";
import { useNavigate } from "react-router-dom"
export default function Createemp() {
    const [employee, setEmployee] = useState({});
    let navigate = useNavigate();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setEmployee(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {

        let demo = JSON.stringify(employee);

        fetch("https://localhost:7158/api/employee", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => { console.log(r) })

        event.preventDefault();

        navigate('/');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>name:</label>
            <input
                type="text"
                name="name"
                onChange={handleChange}
            />
            <br /><label>Email:</label>
            <input
                type="text"
                name="email"
                onChange={handleChange}
            />
            <br /><label>Department:</label>
            <input
                type="text"
                name="departmentId"
                onChange={handleChange}
            />
            <br />
            <input type="submit" />
        </form>
    );
}
