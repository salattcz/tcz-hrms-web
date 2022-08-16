import React from 'react';
import './Hamburger.css';
import {
  FaAtlassian,
  FaMandalorian,
  FaBlackberry,
  FaCloudflare,
  FaDrupal,
  FaGripfire,
  FaGoogleWallet,
  FaJoomla
} from 'react-icons/fa';
function Hamburger() {
  return (
    <div className="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>
      <ul className="menu__box">
        <li>
          <FaAtlassian />
        </li>
        <li>
          <FaBlackberry />
        </li>
        <li>
          <FaCloudflare />
        </li>
        <li>
          <FaDrupal />
        </li>
        <li>
          <FaGripfire />
        </li>
        <li>
          <FaGoogleWallet />
        </li>
        <li>
          <FaJoomla />
        </li>
        <li>
          <FaMandalorian />
        </li>
      </ul>
    </div>
  );
}

export default Hamburger;
