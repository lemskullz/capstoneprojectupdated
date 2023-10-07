import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar({ token, setToken }) {
    const navigate = useNavigate();
    function handleLogout() {
        localStorage.removeItem("token");
        setToken(null);
        // navigate("/")
    }
    return (
        <div className="navbar">
            <div className="links">
             <Link to="/">
                {" "}
                Home{" "}
                </Link>
                {
                token ?
                <Link onClick={handleLogout} to="/">Logout</Link>
                :
                <Link to="/login">
                    {" "}
                    Login{" "}
                </Link>

            }
        </div>
        </div>
    );
}