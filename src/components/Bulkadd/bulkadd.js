import React from 'react';
import './bulkadd.css';
import { Routes, Route } from 'react-router-dom';
import Adminhomepage from '../Adminhomepage/adminhome';
import Adminfooter from '../Adminfooter/adminfooter';
function bulkadd() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <div className="App container">
            <Adminhomepage />
            <div className="col-md-12 mb-4 pb-2">
              <div id="form-outline">
                <label className="form-label" htmlFor="upload">
                  Bulk upload
                </label>
                <input
                  type="file"
                  id="Bulk upload"
                  className="form-control form-control-lg"
                  multiple
                  required
                />
              </div>
              <Adminfooter />
            </div>
          </div>
        }></Route>
    </Routes>
  );
}

export default bulkadd;
