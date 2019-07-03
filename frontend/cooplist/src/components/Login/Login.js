import React from 'react';
import './style.css';

class Login extends React.Component {
    render() {
        return(
        <div className="header">
            <div className="logo-box">
            </div>

            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary-main"><span className="orange">C</span>oop<span className="orange">L</span>ist</span>
                    <span className="heading-primary-sub">E<span className="orange">x</span>treme Ganal<span className="orange">x</span>traction</span>
                </h1>

            <div className="login-input-container">
                <input className="login-input" name="username" placeholder="Username" type="text" autoComplete="off"/>
                <input className="login-input" name="password" placeholder="password" type="password" autoComplete="off"/>
            </div>
                <a href="#" className="btn btn-white btn-animated">Login</a>
            </div>
        </div>
        );
    }
}

export default Login;