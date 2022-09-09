import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
function button6() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <div className="App container">
            <Navbar />
            <h2>button6</h2>
            <Footer />
          </div>
        }></Route>
    </Routes>
  );
}

export default button6;
