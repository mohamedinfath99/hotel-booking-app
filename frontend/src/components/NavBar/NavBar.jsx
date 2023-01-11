
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from "react-router-dom";
import './navBar.css'
import { Link } from "react-router-dom"


function NavBar() {

    const { user, loading, error, dispatch } = useContext(AuthContext)

    const navigate = useNavigate()


    const handleClick = (e) => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" });
        try {
            localStorage.removeItem("access_token");
        } catch (err) {
            console.error(err);
        }
        navigate("/");
    };

    return (
        <div className="navBar">
            <div className="navContainer">
                <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                    <span className="logo"> -Trippy Boo<span className='spanClass'>king</span> ✈️-</span>
                </Link>

                {user ?

                    <div>
                        <span>{user.details.username}</span>

                        <button className="navButton" disabled={loading} onClick={handleClick} >Logout</button>
                    </div>


                    : <div className="navItem">
                        <button className="navButton">Register</button>
                        <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
                            <button className="navButton">Login</button>
                        </Link>
                    </div>
                }
                
            </div>
        </div>
    )
}

export default NavBar
