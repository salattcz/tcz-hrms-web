import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
function bulkadd() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <div className="App container">
            <Navbar />
            <div className="col-md-12 mb-4 pb-2">
              <div className="form-outline">
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
              <Footer />
            </div>
          </div>
        }></Route>
    </Routes>
  );
}

export default bulkadd;
