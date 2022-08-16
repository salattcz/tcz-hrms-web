import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-content">
          <h3>HRMS</h3>
          <ul className="">
            <li>
              <a href="#">
                <i className=""></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className=""></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className=""></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className=""></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className=""></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>
            copyright &copy; <a href="#">HRMS</a>{' '}
          </p>
          <div className="footer-menu">
            <ul className="f-menu">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
