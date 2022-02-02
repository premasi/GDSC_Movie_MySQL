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
                <Link to="/login" style={{backgroundColor: 'white'}}>
                    <button className='nav-link1'>Login</button>
                </Link>
                <button className='nav-link' onClick={this.onSubmit}>Sign Up</button>
            </div>
        </div>
    );
}

export default Register;
