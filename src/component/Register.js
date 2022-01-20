import react from "react";
import "./Login.css";

function Register(){
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
                <button className="btn-login">Sign Up</button>
                <button className="btn-register">Login</button>
            </div>
        </div>
    );
}

export default Register;