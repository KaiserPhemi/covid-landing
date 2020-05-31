// react libraries
import React from "react";

// styles
import "./_btn.scss";

/**
 * @desc default button component
 */
const Button = ({ btnText }) => {
  return <button className="def-btn">{btnText}</button>;
};

export default Button;
