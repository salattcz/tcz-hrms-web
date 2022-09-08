import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Adminfooter from '../Adminfooter/adminfooter';
import Adminhomepage from '../Adminhomepage/adminhome';
import './Userdetails.css';
import logo from './logo.jpg';
function Userdetails() {
  return (
    <div classNameNameName="App container">
      <Routes>
        <Route
          path="*"
          element={
            <div classNameNameName="App container">
              <Adminhomepage />
              <div className="container ">
                <div className="row">
                  <div className="card col-md-4 col-lg-4"><img className="logo" src={logo} alt="this is logo image" /></div>
                  <div className="card col-md-4 col-lg-8">
                    <div className="card-body d-flex flex-column">
                      <div className="row">
                        <div className="col-md-8 mb-4" style="margin-left:2.8rem;">
                          <h2 className="nam d-flex ">Nishant Chhikara</h2>
                          <div className="row">
                            <div className="col-sm">
                              Delhi
                            </div>
                            <div className="col-sm">
                              Email
                            </div>
                            <div className="col-sm">
                              phone
                            </div>
                          </div>
                        </div>
                        <div className="row" style="margin-left:2rem;">
                          <div className="col-lg-4 col-sm-6 col-md-4">
                            <label className="data-label" style="font-weight: bold;">job title</label>
                            <p className="text-truncate">Intern-Technology</p>
                          </div>
                          <div className="col-lg-4 col-sm-6 col-md-4">
                            <label className="data-label" style="font-weight: bold;">Department</label>
                            <p>Creative</p>
                          </div>
                          <div className="col-lg-4 col-sm-6 col-md-4">
                            <label className="data-label" style="font-weight: bold;">Business Unit</label>
                            <p>Techchefz</p>
                          </div>
                          <div className="col-lg-4 col-sm-6 col-md-4">
                            <label className="data-label" style="font-weight: bold;">Reporting Manager</label>
                            <p>Saloni Sikdar</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-dark">
                  <ul className="navbar-nav me-auto">
                    <li><a href="#">Summary</a></li>
                    <li><a href="#">Timeline and feedback</a></li>
                    <li><a href="#">Activity</a></li>
                  </ul>
                </nav>
              <Adminfooter />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default Userdetails;
