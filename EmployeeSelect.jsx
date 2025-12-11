import React, { useState, useEffect } from "react";

function EmployeeSelect() {
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

    fetchIds();
  }, []);

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
      <h2>Select Employee</h2>

      {/* 1. Dropdown with no default selection */}
      <select value={selectedId} onChange={handleSelect}>
        <option value="">-- Select Employee ID --</option>
        {ids.map((eid) => (
          <option key={eid} value={eid}>{eid}</option>
        ))}
      </select>

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

export default EmployeeSelect;
