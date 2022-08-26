import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
// import logo from './logo.jpg';
// import './Navbar.css';
// import Login from '../Login/login';
import Ham from '../Ham/button1';
import Button2 from '../Button2/button2';
import Button3 from '../Button3/button3';
import Button4 from '../Button4/button4';
import Button5 from '../Button5/button5';
import Button6 from '../Button6/button6';
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
  return (
    <div className="App container">
      <div className="App container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="hamburger-menu ">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
              <span></span>
            </label>
            <ul className="menu__box">
              <li>
                <Link className="menu__item" to="/button1">
                  Employees
                </Link>
                <Routes>
                  <Route path="/button1" component={<Ham />}></Route>
                </Routes>
              </li>
              <li>
                <Link className="menu__item" to="/button1">
                  Holidays
                </Link>
                <Routes>
                  <Route path="/button1" component={<Ham />}></Route>
                </Routes>
              </li>
              <li>
                <Link className="menu__item" to="/button1">
                  <FaAtlassian /> Button-1
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
            {/* <img className="logo" src={logo} alt="this is logo image" /> */}
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
                {/* <div className="collapse navbar-collapse" id="navbarColor01">
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
              </div> */}

                <input className="form-control me-sm-2" type="text" placeholder="Search"></input>
                <button className="btn btn-secondary my-2 my-sm-0 btn-dark" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>

      <div>
        <footer className="footer-distributed">
          <div className="footer-left">
            <h3>
              <span>HRMS</span>
            </h3>

            <p className="footer-links">
              <a href="#" className="link-1">
                Home
              </a>

              <a href="#">Blog</a>

              <a href="#">About</a>

              <a href="#">Contact</a>
            </p>

            <p className="footer-company-name">HRMS</p>
          </div>

          <div className="footer-center">
            <div>
              <i className="fa fa-map-marker"></i>
              <p>
                <span>Address</span>
              </p>
            </div>

            <div>
              <i className="fa fa-phone"></i>
              <p>ph. no</p>
            </div>

            <div>
              <i className="fa fa-envelope"></i>
              <p>
                <a href="mailto:mail">mail</a>
              </p>
            </div>
          </div>

          <div className="footer-right">
            <p className="footer-company-about">
              <span>About the company</span>
              description
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Navbar;
