import React from "react";
import "./UserLogin.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
    const [email, setUserName] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();
  

    const handleSubmit = e => {
        e.preventDefault()
        axios
            .post("http://localhost:8080/login", { email, password })
            .then(response => {
            console.log( response.data)
                localStorage.setItem("userId", response.data.id);
            
                navigate('/Cinema');
                window.location.reload();
                console.log(response.data);
            }).catch((err) => console.log(err));

    }

    return (
        <div className="box">
            <form>
                <span className="text-center">login</span>
                <div className="input-container">
                    <input type="text" onChange={event => setUserName(event.target.value)} required />
                    <label>Email</label>
                </div>
                <div className="input-container">
                    <input type="password" onChange={event => setPassword(event.target.value)} required />
                    <label>Password</label>
                </div>
                <div>
                    <button type="button" className="btn" onClick={handleSubmit}>login</button>
                </div>
                <div className="btn2">
                    <button type="button" className="btn" onClick={() => navigate('/Register')}>register</button>
                </div>
            </form>
        </div>
    );
}

export default UserLogin;