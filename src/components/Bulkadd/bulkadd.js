import React, { useState } from 'react';
import './bulkadd.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { addBulkUsers } from '../../helpers/UsersAPIs';
import Adminhomepage from '../Adminhomepage/adminhome';
import Adminfooter from '../Adminfooter/adminfooter';
function bulkadd() {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const handleFileInput = (e) => {
    setFile(e.target.files[0]);
  };
  const handleFileSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    if (file === undefined) {
      window.alert('please select a file first');
    } else {
      addBulkUsers(formData).then((res) => {
        if (res.status === 200) {
          window.alert('Users added successfully!');
          navigate('/Admin');
        }
      });
    }
  };
  return (
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
                  id="Bulk_load"
                  className="btn btn-lg form-control form-control-lg"
                  multiple
                  required
                  onChange={handleFileInput}
                />
                <br />
                <br />
                <button className="btn btn-dark btn-lg" onClick={handleFileSubmit}>
                  Submit
                </button>
              </div>
              <Adminfooter />
            </div>
          </div>
        }></Route>
    </Routes>
  );
}

export default bulkadd;
