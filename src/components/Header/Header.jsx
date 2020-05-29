// react libraries
import React from "react";
import { Link } from "react-router-dom";

// styles
import "./_header.scss";
import Logo from "../Common/Logo";

/**
 * @desc main header
 */
const Header = () => {
  return (
    <nav className="nav-bar">
      <Logo />
      <div className="menu-list-wrapper">
        <ul className="menu-list">
          <li className="menu__purchase menu__item">
            <a href="#">Group Purchasing</a>
          </li>
          <li className="menu__about menu__item">
            <a href="#">About</a>
          </li>
          <li className="menu__contact menu__item">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="btn-wrapper">
        <button className="btn__login btn__typeface">Log in</button>
        <button className="btn__request btn__typeface">Request</button>
        <button className="btn__supply btn__typeface">Supply</button>
      </div>
    </nav>
  );
};

export default Header;
