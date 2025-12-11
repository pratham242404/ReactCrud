import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Employeeup() {

    const [employee, setEmployee] = useState({});

    const { id } = useParams();

    let navigate = useNavigate();

    useEffect(() => {
        fetch("https://localhost:7158/api/employee/" + id)
            .then(res => res.json())
            .then((result) => {
                setEmployee(result);
            }
            ).catch((e) => console.log(e));
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;

        const value = event.target.value;

        setEmployee(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        
        let demo = JSON.stringify(employee);

        fetch("https://localhost:7158/api/employee/" + id, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => { console.log(r) })

        event.preventDefault();
        navigate('/');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Id:</label>
            <input
                type="text"
                name="id"
                value={employee?.id ?? ""}
                disabled={true}
                onChange={handleChange}
            />
            <br /> <label>name:</label>
            <input
                type="text"
                name="name"
                value={employee?.name ?? ""}
                onChange={handleChange}
            />
            <br /> <label>Email:</label>
            <input
                type="text"
                name="email"
                value={employee?.email ?? ""}
                onChange={handleChange}
            />
            <br /> <label>Department:</label>
            <input
                type="text"
                name="departmentId"
                value={employee?.departmentId ?? ""}
                onChange={handleChange}
            />
            <br />
            <input type="submit" />
        </form>
    );
}
 export default Employeeup;



