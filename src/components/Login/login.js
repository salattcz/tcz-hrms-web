import React from 'react';
import './login.css';
import { Link, Routes, Route } from 'react-router-dom';
import Registration from '../Registration/registration';
function Login() {
  return (
    <div className="body">
      <div className="login">
        <h4>Login</h4>
        <form className="Form">
          <div className="text_area">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Company Email"
              className="text_input"
            />
          </div>
          <div className="text_area">
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Email"
              className="text_input"
            />
          </div>
          <div className="text_area">
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Password"
              className="text_input"
            />
          </div>
          <input type="submit" value="LOGIN" className="button" />
        </form>
        <Link className="link" to="/registration">
          Sign Up
        </Link>
        <Routes>
          <Route path="/registration" component={<Registration />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Login;
