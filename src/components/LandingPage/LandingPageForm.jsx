// react libraries
import React from "react";

/**
 * @desc
 */
const LandingPageForm = () => {
  return (
    <div className="landing-page__form">
      <span className="section_header">Get Involved</span>
      <p className="section_sub-header">
        Join our community for the latest technical specifications, verified
        suppliers data, and tools to help manage this global health pandemic.
      </p>
      <form className="subscribe-form">
        <input
          type="email"
          placeholder="Your Email"
          className="user__email form-attr"
        />
        <input className="form__btn form-attr" type="submit" value="Sign Up" />
      </form>
      <span className="landing__page-disclaimer">
        We care about protecting your data. Read our
        <a href="#"> Privacy Policy</a>
      </span>
    </div>
  );
};

export default LandingPageForm;
