import React, { Component } from "react";
import {Link} from "react-router-dom"
import axios from "axios";

class Login extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            password: ''
        }
        this.changeName = this.changeName.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeName(event){
        this.setState({
            name: event.target.value
        })
    }

    changePassword(event){
        this.setState({
            password: event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const login = {
            name: this.state.name,
            password: this.state.password
        }
        axios.get('http://localhost:3001/api/user/register', login)
            .then(res => console.log(res.data));

        this.setState({
            name:"",
            password:""
        })
    }

    render(){
        return(
            <div className="login">
                <div className="Container-login">
                    <h1 className="Title-login">Join Us!</h1>
    
                    <form className="formis" onSubmit={this.onSubmit}>
                        <label>Username<br></br></label>
                        <input 
                            type="text"
                            onChange={this.changeName}
                            value={this.state.name}></input>
                        <br></br>
    
                        <label>Password<br></br></label>
                        <input 
                            type="text"
                            onChange={this.changePassword}
                            value={this.state.password}></input>
                        <br></br>
                        <br></br>
                        <button type="submit" className='nav-link' value='submit'>Sign Up</button>                    
                    </form>
    
                </div>
            </div>
        );
        }
}

export default Login;
