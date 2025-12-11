import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Mydel() {
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/empup/${id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={id} 
        onChange={(e) => setId(e.target.value)} 
      />
      <button type="submit">Go</button>
    </form>
  );
}

export default Mydel;
