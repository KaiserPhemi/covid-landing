// react lirbaries
import React from "react";

// styles
import "./_landing-page.scss";

// components
import LandingPageBanner from "./LandingPageBanner";
import SupplyRequest from "./SupplyRequest";
import LandingPageForm from "./LandingPageForm";
import RequestFlow from "./RequestFlow";

/**
 * @desc app landing page
 */
const LandingPage = () => {
  return (
    <div className="landing-page">
      <LandingPageBanner />
      <SupplyRequest />
      <RequestFlow />
      <LandingPageForm />
    </div>
  );
};

export default LandingPage;
