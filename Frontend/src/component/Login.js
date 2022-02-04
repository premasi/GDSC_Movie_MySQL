import React, { useState } from "react";
import "./Login.css";
import {Link, useNavigate} from "react-router-dom"
import { connect } from 'react-redux'
import axios from "axios";

const Login = (props) => {
    const navigate = useNavigate()
    const onSubmit = (e) => {
        const input = document.querySelectorAll('.Container-login input')
        axios.put('http://localhost:4000/user', {
            "username": input[0].value,
            "password": input[1].value
        }).then( res => {
            props.menggantiUsername(res.data.username)
            props.menggantiWishlist(JSON.parse(res.data.wishlist))
            navigate('/')
        }).catch( err  => {
            console.log(err);
        })
    }


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
                <button className='nav-link1' onClick={onSubmit}>Login</button>
                <Link to="/register">
                    <button className='nav-link'>Sign Up</button>
                </Link>
            </div>
        </div>
    )
}

const ubahJadiProps = (state) => {
    return {
        username: state.username
    }
}

const dispatProps = (dispatch) => {
    return {
        menggantiUsername: (nilaiBaru) => dispatch({type: 'gantiUsername', newValue: nilaiBaru}),
        menggantiWishlist: (nilaibaru) => dispatch({type: 'gantiWishlist', newValue: nilaibaru})
    }
}

export default connect(ubahJadiProps, dispatProps)(Login)