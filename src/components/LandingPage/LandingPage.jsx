// react lirbaries
import React from "react";

// styles
import "./_landing-page.scss";

/**
 * @desc app landing page
 */
const LandingPage = () => {
  return (
    <div className="landing-page">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div className="landing-page__join">
        <div>
          <h2>Get Involved</h2>
          <h3>
            Join our community for the latest technical specifications, verified
            suppliers data, and tools to help manage this global health
            pandemic.
          </h3>
          <div>
            <form>
              <input />
              <button />
            </form>
          </div>
          <h6 class="disclaimer">
            We care about protecting your data. Read our
            <a href="#">Privacy Policy</a>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
