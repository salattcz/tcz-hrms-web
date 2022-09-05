<<<<<<< HEAD
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
=======
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getAllUsersApi } from '../../helpers/UsersAPIs';
>>>>>>> 9226598d85371cc427b2cdd160d796883f667e68
import Adminfooter from '../Adminfooter/adminfooter';
import Adminhomepage from '../Adminhomepage/adminhome';
import './Employees.css';
import logo from './logo.jpg';
import Ham from '../Ham/button1';
function Employees() {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    getAllUsersApi(0, 3).then((res) => {
      setUserList(res.data);
    });
  }, []);

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
<<<<<<< HEAD
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

=======
                {userList.map((user) => (
                  <tbody key={user._id}>
                    <tr>
                      <th scope="row">{user._id}</th>
                      <td>
                        <a href="#">{user.name}</a>
                      </td>
                      <td>{user.department}</td>
                      <td>{user.reportingManager ? user.reportingManager : '---'}</td>
                    </tr>
                  </tbody>
                ))}
                {/* <tbody>
>>>>>>> 9226598d85371cc427b2cdd160d796883f667e68
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
                </tbody> */}
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
