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
      } else if (res.status === 400) {
        window.alert('Invalid username or password');
      } else if (res.status === 404) {
        window.alert("User doesn't hold admin authority");
      }
    });
  };
  return (
    <div className="body">
      <div className="login">
        <h4>Admin Login</h4>
        <form className="Form">
          <label className="item2">
            <b>Email</b>
          </label>
          <div className="text">
            <input
              type="text"
              name="password"
              // placeholder="Email"
              className="form-control form-control-lg"
              onChange={handleEmailInput}
            />
          </div>
          <label className="item3">
            <b>Password</b>
          </label>
          <div className="text">
            <input
              type="password"
              name="password"
              // placeholder="Password"
              className="form-control form-control-lg"
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
