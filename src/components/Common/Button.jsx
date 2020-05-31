// react libraries
import React from "react";
import PropTypes from "prop-types";

// styles
import "./_btn.scss";

/**
 * @desc default button component
 * @param {object} props
 */
const Button = ({ btnText, onClick }) => {
  return (
    <button
      className={`def-btn ${btnText === "Submit" ? "submit-bg-color" : ""}`}
      onClick={(evt) => onClick(evt)}
    >
      {btnText}
    </button>
  );
};

// type checking
Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
