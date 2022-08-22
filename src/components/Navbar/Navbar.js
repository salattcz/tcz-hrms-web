import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import logo from './logo.jpg';
import './Navbar.css';
import Login from '../Login/login';
import Ham from '../Ham/button1';
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
              <Link className="menu__item" to="/button1">
                <FaAtlassian /> Button-1
              </Link>
              <Routes>
                <Route path="/button1" component={<Ham />}></Route>
              </Routes>
              {/* <a className="menu__item" href="#">
                <FaAtlassian /> Button-1
              </a> */}
            </li>

            <li>
              <Link className="menu__item" to="/button2">
                <FaBlackberry /> Button-2
              </Link>
              <Routes>
                <Route path="/button2" component={<Ham />}></Route>
              </Routes>
              {/* <a className="menu__item" href="#">
                <FaBlackberry /> Button-2
              </a> */}
            </li>
            <li>
              <a className="menu__item" href="#">
                <FaCloudflare /> Button-3
              </a>
            </li>
            <li>
              <a className="menu__item" href="#">
                <FaDrupal /> Button-4
              </a>
            </li>
            <li>
              <a className="menu__item" href="#">
                <FaGoogleWallet /> Button-5
              </a>
            </li>
            <li>
              <a className="menu__item" href="#">
                <FaJoomla /> Button-6
              </a>
            </li>
            <li>
              <a className="menu__item" href="#">
                <FaMandalorian /> Button-7
              </a>
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
                      login
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
