// react libraries
import React from "react";

/**
 * @desc
 */
const SignUpPrompt = ({ startReg }) => {
  return (
    <>
      <div className="page-header">
        <h4 className="page-title">Welcome!</h4>
        <h4 className="page-desc">Here are the next steps:</h4>
      </div>
      <div className="desc-box">
        <div className="desc-card">
          <h5 className="card-title">Sign up</h5>
          <p className="card-text">
            Create an account and complete your request in less than 3 minutes.
          </p>
        </div>
        <div className="desc-card">
          <h5 className="card-title">Match with suppliers</h5>
          <p className="card-text">
            After completing your request, we’ll notify relevant suppliers to
            start bidding.
          </p>
        </div>
      </div>
      <button className="start-btn" onClick={(evt) => startReg(evt)}>
        Start
      </button>
    </>
  );
};

export default SignUpPrompt;
