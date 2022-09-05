import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Adminfooter from '../Adminfooter/adminfooter';
import Adminhomepage from '../Adminhomepage/adminhome';
import './Employees.css';
import logo from './logo.jpg';
import Ham from '../Ham/button1';
function Employees() {
  return (
    <div className="App container">
      <Routes>
        <Route
          path="*"
          element={
            <div>
              <Adminhomepage />

              <div className="col-md-12 mb-4 pb-2">
                <form className="bu form-outline">
                  <label id="form-label" htmlFor="upload">
                    Bulk upload:-
                    <input
                      type="file"
                      // id="Bulk_upload"
                      className="btn btn-sm form-control"
                      multiple
                      required
                    />
                  </label>
                  {/* <span className="heading">Bulk Upload</span> */}

                  <button className="btn btn-dark btn-sm">Submit</button>
                </form>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Employee ID</th>
                    <th scope="col">Employee Name</th>
                    <th scope="col">Department</th>
                    <th scope="col">Reporting Manager</th>
                  </tr>
                </thead>
                <tbody>
                  <Link className="table-row" to="/button1">
                    <tr>
                      <th scope="row">
                        <img className="pic" src={logo} alt="this is logo image" /> 1
                      </th>

                      <td>Mahak Agrawal</td>

                      <td>MERN</td>
                      <td>Saloni Sikdar</td>
                    </tr>
                  </Link>
                  <Routes>
                    <Route path="/button1" component={<Ham />}></Route>
                  </Routes>

                  <tr>
                    <th scope="row">
                      <img className="pic" src={logo} alt="this is logo image" /> 2
                    </th>
                    <td>
                      <a href="#">Lakshay Meghlan</a>
                    </td>
                    <td>MERN</td>
                    <td>Saloni Sikdar</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <img className="pic" src={logo} alt="this is logo image" /> 3
                    </th>
                    <td>
                      <a href="#">Nishant Kumar</a>
                    </td>
                    <td>Creative</td>
                    <td>Saloni Sikdar</td>
                  </tr>
                </tbody>
              </table>
              <Adminfooter />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default Employees;
