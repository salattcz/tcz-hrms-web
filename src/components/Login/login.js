import React from 'react';
import './login.css';
import { Link, Routes, Route } from 'react-router-dom';
import Registration from '../Registration/registration';
import Adminlogin from '../Adminlogin/adminlogin';
function Login() {
  return (
    <div className="body">
      <div className="login">
        <h4>Login</h4>
        <form className="Form">
          <label className="item">
            <b>Company Email</b>
          </label>
          <div className="text_area">
            <input
              type="text"
              id="username"
              name="username"
              // placeholder="Company Email"
              className="text_input"
            />
          </div>
          <label className="item2">
            <b>Email</b>
          </label>
          <div className="text_area">
            <input
              type="text"
              id="password"
              name="password"
              // placeholder="Email"
              className="text_input"
            />
          </div>
          <label className="item3">
            <b>Password</b>
          </label>
          <div className="text_area">
            <input
              type="text"
              id="password"
              name="password"
              // placeholder="Password"
              className="text_input"
            />
          </div>
          <input type="submit" value="LOGIN" className="button" />
          <Link className="link" to="/registration">
            Register
          </Link>
          <Routes>
            <Route path="/registration" component={<Registration />}></Route>
          </Routes>
          <Link className="link" to="/adminlogin">
            Admin Login
          </Link>
          <Routes>
            <Route path="/adminlogin" component={<Adminlogin />}></Route>
          </Routes>
        </form>
      </div>
    </div>
  );
}

export default Login;
