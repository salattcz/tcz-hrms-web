import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Adminfooter from '../Adminfooter/adminfooter';
import Adminhomepage from '../Adminhomepage/adminhome';
import './Holidays.css';
// import logo from './logo.jpg';
function Holidays() {
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
                    Bulk upload
                    <input
                      type="file"
                      // id="Bulk_upload"
                      className="btn btn-sm form-control form-control-sm"
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
                    {/* <th scope="col">Number</th> */}
                    <th scope="col">Admin</th>
                    <th scope="col">Employees</th>
                    <th scope="col">Interns</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <Link className="me" to="/button1"> */}
                  <tr>
                    <td>
                      <a>....</a>
                    </td>
                    <td>.....</td>
                    <td>.....</td>
                  </tr>
                  {/* </Link>
                    <Routes>
                      <Route path="/button1" component={<Ham />}></Route>
                    </Routes> */}

                  <tr>
                    <td>
                      <a href="#">.....</a>
                    </td>
                    <td>.....</td>
                    <td>.....</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#">......</a>
                    </td>
                    <td>.....</td>
                    <td>.....</td>
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

export default Holidays;
