// react libraries
import React from "react";

// utils
import {
  REQUEST_FLOW_IMG_1,
  REQUEST_FLOW_IMG_2,
  REQUEST_FLOW_IMG_3,
  REQUEST_FLOW_IMG_4,
} from "../../utils/constants";

/**
 * @desc
 */
const RequestFlow = () => {
  return (
    <div className="request-flow">
      <div className="wrapper-header">How it works</div>
      <div className="step-1-column common-layout">
        <section className="section-desc">
          <h5 className="section-title">Step One</h5>
          <h1 className="section-heading">
            Post compliant requests in minutes
          </h1>
          <p className="section-subheading">
            Tell us what you need and Response uses your terms to generate all
            the necessary paperwork.
          </p>
        </section>
        <section className="section_img">
          <img src={REQUEST_FLOW_IMG_1} alt="req_for_gloves" />
        </section>
      </div>
      <div className="step-2-column common-layout">
        <section className="section-desc">
          <h5 className="section-title">Step Two</h5>
          <h1 className="section-heading">
            Match with suppliers you can trust
          </h1>
          <p className="section-subheading">
            Response instantly notifies the most relevant suppliers based on
            your request.
          </p>
        </section>
        <section className="section_img">
          <img src={REQUEST_FLOW_IMG_2} alt="req_for_gloves" />
        </section>
      </div>
      <div className="step-3-column common-layout">
        <section className="section-desc">
          <h5 className="section-title">Step Three</h5>
          <h1 className="section-heading">Pick the best offer</h1>
          <p className="section-subheading">
            We automatically collect and score the best offers based on quality,
            lead time, and price.
          </p>
        </section>
        <section className="section_img">
          <img src={REQUEST_FLOW_IMG_3} alt="req_for_gloves" />
        </section>
      </div>
      <div className="step-4-column common-layout">
        <section className="section-desc">
          <h5 className="section-title">Step Four</h5>
          <h1 className="section-heading">Get your supplies</h1>
          <p className="section-subheading">
            Response is designed to make emergency procurement easy and fast, so
            that you can get back to the work that really matters - fighting
            COVID-19.
          </p>
        </section>
        <section className="section_img">
          <img src={REQUEST_FLOW_IMG_4} alt="req_for_gloves" />
        </section>
      </div>
    </div>
  );
};

export default RequestFlow;
