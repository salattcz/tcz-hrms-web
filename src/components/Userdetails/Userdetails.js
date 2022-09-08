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
                  <div className="card col-md-4 col-lg-4">
                    <img className="log" src={logo} alt="this is logo image" />
                  </div>
                  <div className="card col-md-4 col-lg-8">
                    <div className="card-body d-flex flex-column">
                      <div className="row">
                        <div className="he col-md-8 mb-4">
                          <h2 className="nam d-flex ">Nishant Chhikara</h2>
                          <div className="row">
                            <div className="col-sm">Delhi</div>
                            <div className="col-sm">Email</div>
                            <div className="col-sm">phone</div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-4 col-sm-6 col-md-4">
                            <label className="data-label">job title</label>
                            <p className="text-truncate">Intern-Technology</p>
                          </div>
                          <div className="col-lg-4 col-sm-6 col-md-4">
                            <label className="data-label">Department</label>
                            <p>Creative</p>
                          </div>
                          <div className="col-lg-4 col-sm-6 col-md-4">
                            <label className="data-label">Business Unit</label>
                            <p>Techchefz</p>
                          </div>
                          <div className="col-lg-4 col-sm-6 col-md-4">
                            <label className="data-label">Reporting Manager</label>
                            <label className="data-label">job title</label>
                            <p className="text-truncate">Intern-Technology</p>
                          </div>
                          <div className="col-lg-4 col-sm-6 col-md-4">
                            <label className="data-label">Department</label>
                            <p>Creative</p>
                          </div>
                          <div className="col-lg-4 col-sm-6 col-md-4">
                            <label className="data-label">Business Unit</label>
                            <p>Techchefz</p>
                          </div>
                          <div className="col-lg-4 col-sm-6 col-md-4">
                            <label className="data-label">Reporting Manager</label>
                            {/* >>>>>>> d505313f9c030242f37399f2c2a5ee104036e8ea */}
                            <p>Saloni Sikdar</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body mb-10">
                      <h3 className="Hea">About</h3>
                      <div className="btn btn-sm btn-link">
                        <input
                          type="tel"
                          id="company Description"
                          className="form-control form-control-lg"
                          required
                        />
                      </div>
                      <h3 className="Hea">What I love about my job?</h3>
                      <div className="btn btn-sm btn-link">
                        <input
                          type="tel"
                          id="company Description"
                          className="form-control form-control-lg"
                          required
                        />
                      </div>
                      <h3 className="Hea">My interests and hobbies</h3>
                      <div className="btn btn-sm btn-link">
                        <input
                          type="tel"
                          id="company Description"
                          className="form-control form-control-lg"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <Adminfooter />
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default Userdetails;
