// react libraries
import React from "react";

// styles
import "./__header.scss";

/**
 * @desc main header
 */
const Header = () => {
  return (
    <nav className="nav-bar">
      <div className="app-logo">logo</div>
      <div className="menu-list-wrapper">
        <ul className="menu-list">
          <li className="menu__purchase">Group Purchasing</li>
          <li className="menu__about">About</li>
          <li className="menu__contact">Contact Us</li>
        </ul>
      </div>
      <div className="btn-wrapper">
        <button className="btn__login">Login</button>
        <button className="btn__request">Request</button>
        <button className="btn__supply">Supply</button>
      </div>
    </nav>
  );
};

export default Header;
