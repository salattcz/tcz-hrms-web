import React from 'react';
<<<<<<< Updated upstream
=======
import { Link } from 'react-router-dom';
>>>>>>> Stashed changes
import logo from './logo.jpg';
import './Navbar.css';
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
    <header>
<<<<<<< Updated upstream
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            HRMS
          </a>
          <img className="logo" src={logo} alt="this is logo image" />
=======
      <nav className="navbar navbar-expand-lg navbar-dark container ">
        <div className="hamburger-menu ">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </label>

          <ul className="menu__box">
            <li>
              <a className="menu__item" href="#">
                <FaAtlassian /> Button-1
                {/* <link className="menu__item" to={'/pages/Hamburger pages/button-1'}>
                <FaAtlassian /> Button-1
              </link> */}
              </a>
            </li>
            <li>
              <a className="menu__item" href="#">
                <FaBlackberry /> Button-2
              </a>
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
            Name
          </a>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                  <span className="visually-hidden">(current)</span>
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                <a className="nav-link active " href="#">
=======
                <a className="nav-link active" href="#">
>>>>>>> Stashed changes
                  Button-3
                </a>
              </li>
            </ul>
            <form className="d-flex">
<<<<<<< Updated upstream
              <input className="form-control me-sm-2" type="text" placeholder="Search"></input>
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
=======
              <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav me-auto">
                  <li className="nav">
                    <Link className="nav-link active" to={'/pages/login/login'}>
                      login
                    </Link>
                  </li>
                  {/* <li className="nav">
                    <a className="nav-link active" href="#">
                      logout
                    </a>
                  </li> */}
                </ul>
              </div>
              <input className="form-control me-sm-2" type="text" placeholder="Search"></input>
              <button className="btn btn-secondary my-2 my-sm-0 btn-dark" type="submit">
>>>>>>> Stashed changes
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
