import React, { useState } from "react";
import "./Login.css";
import Register from "./Register";

function Login(){
    return(
        <div className="login">
            <div className="Container-login">
                <h1 className="Title-login">Welcome Back!</h1>
                <label>Username<br></br></label>
                <input type="text"></input>
                <br></br>
                <label>Password<br></br></label>
                <input type="text"></input>
                <br></br>
                <br></br>
                <button className="btn-login">Login</button>
                <button className="btn-register">Register</button>
            </div>
        </div>
    )
}

export default Login;