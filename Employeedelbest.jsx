import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
export function Employeedelbest() {
    const [employee, setEmployee] = useState({ name: "", email: "", department: "" });
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();
    // Fetch employee details
    useEffect(() => {
        const controller = new AbortController();
        const fetchEmployee = async () => {
            try {
                const res = await fetch(`https://localhost:7158/api/employee/${id}`, {
                    signal: controller.signal,
                });
                if (!res.ok) throw new Error("Failed to fetch employee");
                const data = await res.json();
                setEmployee(data);
            }
            catch (error) {
                if (error.name !== "AbortError") {
                    console.error(error);
                    alert("Error fetching employee details");
                }
            } finally {
                setLoading(false);
            }
        };
        fetchEmployee();
        // Cleanup: abort fetch if component unmounts
        return () => controller.abort();
    }, [id]);
    const handleDelete = async (event) => {
        event.preventDefault();
        const confirmDelete = window.confirm("Are you sure you want to delete this employee?");
        if (!confirmDelete) return;
        try {
            const response = await fetch(`https://localhost:7158/api/employee/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) throw new Error("Failed to delete employee");
            alert("Employee deleted successfully");
            navigate("/");
        } catch (error) {
            console.error(error);
            alert("Error deleting employee");
        }

    
    };

const handleCancel = () => navigate("/");

  // --- JSX UI ---
  return (
    <div >
      <h2>Delete Employee</h2>

      {loading ? (
        <p>Loading employee details...</p>
      ) : (
        <>
          <div style={{ marginBottom: "1rem" }}>
            <label><strong>ID:</strong></label>
            <div>{employee.id ?? "—"}</div>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label><strong>Name:</strong></label>
            <div>{employee.name ?? "—"}</div>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label><strong>Email:</strong></label>
            <div>{employee.email ?? "—"}</div>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label><strong>Department:</strong></label>
            <div>{employee.department ?? employee.departmentId ?? "—"}</div>
          </div>

          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button type="button" onClick={handleDelete}>Delete</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Employeedelbest;
