import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Adminfooter from '../Adminfooter/adminfooter';
import Adminhomepage from '../Adminhomepage/adminhome';
function Admin() {
  return (
    <div className="App container">
      <Routes>
        <Route
          path="*"
          element={
            <div className="App container">
              <Adminhomepage />
              <Adminfooter />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default Admin;
