import React, { useState } from 'react';
import './adminlogin.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
// import Adminhomepage from '../Adminhomepage/adminhome';
import Admin from '../Admin/Admin';
import { adminLoginApi } from '../../helpers/UsersAPIs';
// import { Link, Routes, Route } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    adminLoginApi({ email, password }).then((res) => {
      if (res.status === 200) {
        localStorage.setItem('Profile', JSON.stringify(res.data));
        navigate('/Admin');
      } else {
        window.alert('Invalid Credentials');
      }
    });
  };
  return (
    <div className="body">
      <div className="login">
        <h4>Admin Login</h4>
        <form className="Form">
          {/* <label className="item">
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
          </div> */}
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
              onChange={handleEmailInput}
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
              onChange={handlePasswordInput}
            />
          </div>
          <input type="submit" value="LOGIN" className="button" onClick={handleLoginSubmit} />
          <Routes>
            <Route path="/Admin" component={<Admin />}></Route>
          </Routes>
        </form>
      </div>
    </div>
  );
}

export default Login;
