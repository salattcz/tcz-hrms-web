import React, { useState } from 'react';
import './login.css';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import Registration from '../Registration/registration';
import Adminlogin from '../Adminlogin/adminlogin';
import { employeeLoginApi } from '../../helpers/UsersAPIs';
function Login() {
  const navigate = useNavigate();

  const [companyEmail, setCompanyEmail] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCompanyEmailInput = (e) => {
    setCompanyEmail(e.target.value);
  };
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!companyEmail || !email || !password) {
      window.alert('Please fill all fields');
    } else {
      employeeLoginApi({ companyEmail, email, password }).then((res) => {
        if (res.status === 200) {
          localStorage.setItem('Profile', JSON.stringify(res.data));
          navigate('/');
        } else if (res.status === 400) {
          window.alert('Invalid credentials');
        } else if (res.status === 401) {
          window.alert('User is not an employee');
        } else if (res.status === 404) {
          window.alert("User doesn't hold admin authority");
        }
      });
    }
  };
  return (
    <div className="body">
      <div className="login">
        <h4>Login</h4>
        <form className="Form">
          <label className="item">
            <b>Company Email</b>
          </label>
          <div className="text">
            <input
              type="text"
              name="username"
              // placeholder="Company Email"
              className="form-control form-control-lg"
              onChange={handleCompanyEmailInput}
            />
          </div>
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
          <input type="submit" value="LOGIN" className="button" onClick={handleSubmit} />
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
