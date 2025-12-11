import React, { useState, useEffect } from "react";

function EmployeeRadio() {
  const [ids, setIds] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [employee, setEmployee] = useState({});

  // Load all employee IDs when page loads
  useEffect(() => {
    const fetchIds = async () => {
      const res = await fetch("https://localhost:7158/api/employee");
      const result = await res.json();

      // result should be array → extract IDs
      setIds(result.map(emp => emp.id));
    };

    fetchIds();// we load this useeffect once at the start
  }, []);//dependency array is empty coz as we want to load this only once when page loads

  // Fetch employee when dropdown changes
  const handleSelect = async (event) => {
    const id = event.target.value;
    setSelectedId(id);

    if (id === "") {
      setEmployee({});
      return;
    }

    const res = await fetch("https://localhost:7158/api/employee/" + id);
    const result = await res.json();
    setEmployee(result);
  };

  return (
    <div>
      <h2>Radio Employee</h2>

     
       
      {ids.map((eid) => (
  <label key={eid}>
    <input 
      type="radio" 
      name="employee"   
      value={eid}
      onChange={handleSelect}
    />
    {eid}
    <br/>
  </label>
))}

    


      {/* 3. Display details only when selected */}
      {selectedId && (
        <div style={{ marginTop: "20px" }}>
          <label>Id:</label> {employee.id} <br />
          <label>Name:</label> {employee.name} <br />
          <label>Email:</label> {employee.email} <br />
          <label>Department:</label> {employee.departmentId}
        </div>
      )}
    </div>
  );
}

export default EmployeeRadio;
