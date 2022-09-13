import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import logo from './logo.jpg';
import './Navbar.css';
import Login from '../Login/login';
import Ham from '../Ham/button1';
import Button2 from '../Button2/button2';
import Button3 from '../Button3/button3';
import Button4 from '../Button4/button4';
import Button5 from '../Button5/button5';
import Button6 from '../Button6/button6.js';
import Button7 from '../Button7/button7';
import {
  FaAtlassian,
  FaBlackberry,
  FaCloudflare,
  FaDrupal,
  FaGoogleWallet,
  FaJoomla,
  FaMandalorian
} from 'react-icons/fa';
function Navbar() {
  var currentUser = localStorage.getItem('Profile');
  const userData = JSON.parse(currentUser);
  const employeeId = userData?.result?._id;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="hamburger-menu ">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </label>
          <ul className="menu__box">
            <li>
              <Link className="menu__item" to={`/Userdetails/${employeeId}`}>
                <FaAtlassian /> My Profile
              </Link>
              <Routes>
                <Route path="/button1" component={<Ham />}></Route>
              </Routes>
            </li>

            <li>
              <Link className="menu__item" to="/button2">
                <FaBlackberry /> Button-2
              </Link>
              <Routes>
                <Route path="/button2" component={<Button2 />}></Route>
              </Routes>
            </li>
            <li>
              <Link className="menu__item" to="/button3">
                <FaCloudflare /> Button-3
              </Link>
              <Routes>
                <Route path="/button3" component={<Button3 />}></Route>
              </Routes>
            </li>
            <li>
              <Link className="menu__item" to="/button4">
                <FaDrupal /> Button-4
              </Link>
              <Routes>
                <Route path="/button4" component={<Button4 />}></Route>
              </Routes>
            </li>
            <li>
              <Link className="menu__item" to="/button5">
                <FaGoogleWallet /> Button-5
              </Link>
              <Routes>
                <Route path="/button5" component={<Button5 />}></Route>
              </Routes>
            </li>
            <li>
              <Link className="menu__item" to="/button6">
                <FaJoomla /> Button-6
              </Link>
              <Routes>
                <Route path="/button6" component={<Button6 />}></Route>
              </Routes>
            </li>
            <li>
              <Link className="menu__item" to="/button7">
                <FaMandalorian /> Button-7
              </Link>
              <Routes>
                <Route path="/button7" component={<Button7 />}></Route>
              </Routes>
            </li>
          </ul>
        </div>
        <div className="container-fluid">
          <img className="logo" src={logo} alt="this is logo image" />
          <a className="navbar-brand" href="#">
            HRMS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Button-1
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Button-2
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Button-3
                </a>
              </li>
            </ul>

            <form className="d-flex">
              <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav me-auto">
                  <li className="nav">
                    <Link className="nav-link active" to="/login">
                      {currentUser === null ? 'login' : 'logout'}
                    </Link>
                  </li>
                </ul>
                <Routes>
                  <Route path="/login" component={<Login />}></Route>
                </Routes>
              </div>

              <input className="form-control me-sm-2" type="text" placeholder="Search"></input>
              <button className="btn btn-secondary my-2 my-sm-0 btn-dark" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
