
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
import './navBar.css'
import { Link } from "react-router-dom"


function NavBar() {

    const { user } = useContext(AuthContext)

    return (
        <div className="navBar">
            <div className="navContainer">
                <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                    <span className="logo"> -Trippy Boo<span className='spanClass'>king</span> ✈️-</span>
                </Link>

                {user ? user.username : <div className="navItem">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>}
            </div>
        </div>
    )
}

export default NavBar
