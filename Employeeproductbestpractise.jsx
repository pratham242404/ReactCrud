import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
function Employeeproductbestpractise() {

    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log("Rendering Listemployee component");

    useEffect(() => {
        let isMounted = true; // track if component is still mounted
        const controller = new AbortController(); // for cancellation
        const signal = controller.signal;
        const fetchEmployees = async () => {
            try {
                const response = await fetch("https://localhost:7158/api/employee", { signal });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                if (isMounted) {
                    setEmployees(data);
                }
            } catch (err) {
                if (isMounted && err.name !== "AbortError") {
                    setError(err.message);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };
        setTimeout(fetchEmployees, 1000); // simulate network delay
        // Cleanup function
        return () => {
            isMounted = false;
            controller.abort(); // cancel fetch if component unmounts
        };
    }, []);
    if (error) return <p>Error: {error}</p>;
    return (
        <div>
            {loading ? <p>Loading...</p> : null}
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
export default Employeeproductbestpractise;


