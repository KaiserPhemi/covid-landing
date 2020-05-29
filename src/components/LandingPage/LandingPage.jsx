// react lirbaries
import React from "react";

// styles
import "./_landing-page.scss";

// components
import LandingPageBanner from "./LandingPageBanner";

/**
 * @desc app landing page
 */
const LandingPage = () => {
  return (
    <div className="landing-page">
      <LandingPageBanner />
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div className="landing-page__join">
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
          <input
            className="form__btn form-attr"
            type="submit"
            value="Sign Up"
          />
        </form>
        <span className="landing__page-disclaimer">
          We care about protecting your data. Read our
          <a href="#"> Privacy Policy</a>
        </span>
      </div>
    </div>
  );
};

export default LandingPage;
