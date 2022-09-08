import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
// import logo from './logo.jpg';
import './adminhome.css';
import Login from '../Login/login';
import User from '../User/userregister';
// import Button3 from '../Button3/button3';
import Button4 from '../Button4/button4';
import Button5 from '../Button5/button5';
import Button6 from '../Button6/button6';
import Button7 from '../Button7/button7';
import Bulkadd from '../Bulkadd/bulkadd';
import Employees from '../Employees/Employees';
import Holidays from '../Holidays/Holidays';
import Userdetails from '../Userdetails/Userdetails';
import {
  FaAtlassian,
  FaBlackberry,
  FaCloudflare,
  FaDrupal,
  FaGoogleWallet,
  FaJoomla,
  FaMandalorian,
  FaCreativeCommonsBy,
  FaEllo
} from 'react-icons/fa';
// import Adminfooter from '../Adminfooter/adminfooter';
function Navbar() {
  return (
    <div className="App container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="hamburger-menu ">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </label>
          <ul className="menu__box">
            <li>
              <Link className="menu__item" to="/Employees">
                <FaCreativeCommonsBy /> Employees
              </Link>
              <Routes>
                <Route path="/Employees" component={<Employees />}></Route>
              </Routes>
            </li>
            <li>
              <Link className="menu__item" to="/Holidays">
                <FaEllo /> Holidays
              </Link>
              <Routes>
                <Route path="/Holidays" component={<Holidays />}></Route>
              </Routes>
            </li>
            <li>
              <Link className="menu__item" to="/userregister">
                <FaAtlassian /> Add Users
              </Link>
              <Routes>
                <Route path="/userregister" component={<User />}></Route>
              </Routes>
            </li>

            <li>
              <Link className="menu__item" to="/bulkadd">
                <FaBlackberry /> Bulk Add Users
              </Link>
              <Routes>
                <Route path="/bulkadd" component={<Bulkadd />}></Route>
              </Routes>
            </li>
            <li>
              <Link className="menu__item" to="/Userdetails">
                <FaCloudflare /> Button-3
              </Link>
              <Routes>
                <Route path="/Userdetails" component={<Userdetails />}></Route>
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
              <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav me-auto">
                  <li className="nav">
                    <Link className="nav-link active" to="/login">
                      Logout
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
