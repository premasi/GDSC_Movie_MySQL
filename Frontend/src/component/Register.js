import react from "react";
import "./Login.css";
import {Link, useNavigate} from "react-router-dom"
import { connect } from 'react-redux'
import React, { Component } from 'react';
import axios from "axios";

function Register(props) {
    const navigate = useNavigate()
    const onSubmit = (e) => {
        const input = document.querySelectorAll('.login input')
        if(input[0].value !==0){
            axios.post('http://localhost:4000/user', {
                "username": input[0].value,
                "password": input[1].value,
                "wishlist": []
            }).then( res => {
                console.log('berhasil');
            }).catch( err  => {
                console.log('error');
            })
            props.menggantiUsername(input[0].value)
            props.menggantiWishlist([])
            navigate('/')
        } 
    }

    return(
        <div className="login">
            <div className="Container-login">
                <h1 className="Title-login">Join Us!</h1>
                <label>Username<br></br></label>
                <input type="text"></input>
                <br></br>
                <label>Password<br></br></label>
                <input type="text"></input>
                <br></br>
                <br></br>
                <Link to="/login" style={{backgroundColor: 'white'}}>
                <button className='nav-link1'>Login</button>
                </Link>
                <button className='nav-link' onClick={onSubmit}>Sign Up</button>
            </div>
        </div>
    );
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

export default connect(ubahJadiProps, dispatProps)(Register)
