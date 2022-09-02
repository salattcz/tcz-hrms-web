import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getAllUsersApi } from '../../helpers/UsersAPIs';
import Adminfooter from '../Adminfooter/adminfooter';
import Adminhomepage from '../Adminhomepage/adminhome';
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
            <div className="App container">
              <Adminhomepage />

              <div className="col-md-12 mb-4 pb-2">
                <div id="form-outline">
                  {/* <label className="form-label" htmlFor="upload">
                    Bulk upload
                  </label> */}
                  <h5>Bulk Upload</h5>
                  <input
                    type="file"
                    id="Bulk upload"
                    className="btn btn-lg form-control form-control-lg"
                    multiple
                    required
                  />
                  <br />
                  <br />
                  <button className="btn btn-dark btn-lg">Submit</button>
                </div>
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
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      <a href="#">Mahak Agrawal</a>
                    </td>
                    <td>MERN</td>
                    <td>Saloni Sikdar</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>
                      <a href="#">Lakshay Meghlan</a>
                    </td>
                    <td>MERN</td>
                    <td>Saloni Sikdar</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
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
