import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Adminfooter from '../Adminfooter/adminfooter';
import Adminhomepage from '../Adminhomepage/adminhome';
import './Employees.css';
import { getAllUsersApi } from '../../helpers/UsersAPIs';
import logo from './logo.jpg';
// import Ham from '../Ham/button1';
function Employees() {
  const navigate = useNavigate();

  const [userList, setUserList] = useState([]);
  useEffect(() => {
    getAllUsersApi(0, 3).then((res) => {
      setUserList(res.data);
    });
  }, []);

  const handleClick = () => {
    navigate('/button1');
  };
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
                  <label id="fo form-label" htmlFor="upload">
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
                  {userList === []
                    ? ''
                    : userList.map((user) => (
                        <tr onClick={handleClick} key={user._id} style={{ cursor: 'pointer' }}>
                          <th scope="row">
                            <img className="pic" src={logo} alt="this is logo image" /> 1
                          </th>
                          <td>{user.name}</td>
                          <td>{user.department}</td>
                          <td>{user.reportingManager ? user.reportingManager : '---'}</td>
                        </tr>
                      ))}
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
