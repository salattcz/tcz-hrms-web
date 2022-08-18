import React from 'react';
import './login.css';

function login() {
  return (
    <div className="body">
      <div className="login">
        <h4>Login</h4>
        <form>
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
          <input type="submit" value="LOGIN" className="btn" />
        </form>
        <a className="link" href="#">
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default login;
