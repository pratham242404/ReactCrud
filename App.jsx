import { Outlet, Link } from "react-router-dom"
function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>     <Link to="/Home">Home</Link> </li>
          <li>     <Link to="/Contactus">Contactus</Link> </li>
          <li>     <Link to="/Employeeproduct">Employeeproduct</Link> </li>
           <li>    <Link to="/Employeeproductbestpractise">Employeeproductbestpractise</Link> </li>
           <li>     <Link to="/Create">Create</Link> </li>
           <li>     <Link to="empup/:id">Update</Link> </li>
          <li>     <Link to="empdel/:id">Delete</Link> </li>
        </ul>
      </nav>

      <Outlet></Outlet>
    </div>
  );
}
export default App;

