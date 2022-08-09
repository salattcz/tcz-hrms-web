import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>

        <ul className="menu__box">
          <li>
            <a className="menu__item" href="#">
              Button-1
            </a>
          </li>
          <li>
            <a className="menu__item" href="#">
              Button-2
            </a>
          </li>
          <li>
            <a className="menu__item" href="#">
              Button-3
            </a>
          </li>
          <li>
            <a className="menu__item" href="#">
              Button-4
            </a>
          </li>
          <li>
            <a className="menu__item" href="#">
              Button-5
            </a>
          </li>
        </ul>
      </div>
      <div className="container-fluid">
        <img className="logo" width="40px;" src="logo.jpg" alt="logo"></img>
        <a className="navbar-brand" href="#">
          Name
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
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Button-1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Button-2
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Button-3
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav me-auto">
                <li className="nav">
                  <a className="nav-link active" href="#">
                    login
                    <span className="visually-hidden">(current)</span>
                  </a>
                </li>
                <li className="nav">
                  <a className="nav-link active" href="#">
                    logout
                  </a>
                </li>
              </ul>
            </div>
            <input className="form-control me-sm-2" type="text" placeholder="Search"></input>
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
