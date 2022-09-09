import React from 'react';
// import { Link, Routes, Route } from 'react-router-dom';
function adminfooter() {
  return (
    <div>
      <footer className="footer-distributed bg-dark">
        <div className="footer-left">
          <h3>
            <span>HRMS</span>
          </h3>

          <p className="footer-links">
            <a href="#" className="link-1">
              Home
            </a>

            <a href="#">Blog</a>

            <a href="#">About</a>

            <a href="#">Contact</a>
          </p>

          <p className="footer-company-name">HRMS</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Address</span>
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>ph. no</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:mail">mail</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            description
          </p>
        </div>
      </footer>
    </div>
    // </div>
  );
}

export default adminfooter;
