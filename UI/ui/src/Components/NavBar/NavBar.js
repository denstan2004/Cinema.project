import React from "react";
import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
    const [navBarState, setNavBarState] = useState(false);
    const [loginState, setLoginState] = useState(IsUserLogged());
    let navigate = useNavigate();

    return (
        <>
            
            {loginState  && (
                <div className="nav-bar">
                    <div className="nav-bar-caption">
                        <Link to="/Cinema" className="nav-bar-home"> Cinema </Link>
                    </div>
                    <div className="nav-bar-caption">
                        <Link to="/Profile" className="nav-bar-side">Profile</Link>
                    </div>
                    <div className="nav-bar-caption">
                        <Link to="/CreateFilm" className="nav-bar-side">Create Film</Link>
                    </div>
                    <div>
                        <button className="nav-bar-logout" onClick={() => { setNavBarState(false); navigate('/'); HandleLogOut();}}> Log out </button>
                    </div>
                </div>
            )}
        </>
    );
}

function HandleLogOut() {
    localStorage.clear();
    window.location.reload();
}

function IsUserLogged() {
    let user = localStorage.getItem("userId");
    return user ? true : false;
}

export default NavBar;