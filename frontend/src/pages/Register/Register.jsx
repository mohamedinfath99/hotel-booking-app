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
        <h1 className="heading">Register Form</h1>



        <input type="text" placeholder="username" id="username" onChange={handleChange} className="lInput" required />

        <input type="email" placeholder="email" id="email" onChange={handleChange} className="lInput" required />

        <input type="text" placeholder="country" id="country" onChange={handleChange} className="lInput" required />

        <input type="text" placeholder="city" id="city" onChange={handleChange} className="lInput" required />

        <input type="text" placeholder="phone" id="phone" onChange={handleChange} className="lInput" required />

        <input type="password" placeholder="password" id="password" onChange={handleChange} className="lInput" required />

        <button onClick={handleClick} className="lButton">
          Resgister
        </button>


      </div>
      <div className="errorMsg">
        {error && <span>{error.message}</span>}
      </div>

    </div>
  );
};

export default Register;
