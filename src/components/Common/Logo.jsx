// react libraries
import React from "react";

// utils
import { LOGO_URL } from "../../utils/constants";

// styles
import "./_logo.scss";

/**
 * @desc default logo
 */
const Logo = () => {
  return (
    <div className="logo__wrapper">
      <a href="/">
        <img className="logo" src={LOGO_URL} alt="app_logo" />
      </a>
    </div>
  );
};

export default Logo;
