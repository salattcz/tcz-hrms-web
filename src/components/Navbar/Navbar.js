import React from 'react';
import logo from './logo.jpg';
import './Navbar.css';

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            HRMS
          </a>
          <img className="logo" src={logo} alt="this is logo image" />
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
                <a className="nav-link active " href="#">
                  Button-3
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-sm-2" type="text" placeholder="Search"></input>
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
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
