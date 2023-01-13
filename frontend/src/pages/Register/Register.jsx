import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Register.css';



const Register = () => {

  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async () => {
    try {
      const res = await axios.post("/auth/register", credentials);
      navigate("/")

    } catch (err) {
      setError(err.response.data);
    }
  };


  return (
    <div className="login">
      <div className="lContainer">
        <h1 style={{ color: "darkblue", textTransform: "uppercase", marginBottom: "50px" }}>Register Form</h1>

        {error && <span>{error.message}</span>}
        <input type="text" placeholder="username" id="username" onChange={handleChange} className="lInput" required/>

        <input type="text" placeholder="email" id="email" onChange={handleChange}  className="lInput" required />

        <input type="password" placeholder="password" id="password" onChange={handleChange} className="lInput" required/>

        <button onClick={handleClick} className="lButton">
          Resgister
        </button>

        
      </div>
    </div>
  );
};

export default Register;
