import React, { useState } from "react";
import {Link} from "react-router-dom"

export const Login = () => {
    return(
        <div className="Main">
            <div className="Container-login">
                <h1 className="Title-login">Welcome Back!</h1>
                <label>Username<br></br></label>
                <input type="text"></input>
                <br></br>
                <label>Password<br></br></label>
                <input type="text"></input>
                <br></br>
                <br></br>
                <button className='nav-link1' >Login</button>
                <Link to="/register">
                    <button className='nav-link'>Sign Up</button>
                </Link>
            </div>
        </div>
    )
}
