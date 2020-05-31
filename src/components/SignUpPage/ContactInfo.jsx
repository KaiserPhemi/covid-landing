// react libraries
import React from "react";

// styles
import "./_contact.scss";

// utils
import { EULA } from "../../utils/constants";

/**
 * @desc captures users contact details
 */
const ContactInfo = () => {
  return (
    <div className="contact-info-page">
      {/* Contact Info */}
      <div className="default-card contact-info-section">
        <div className="section-header">
          <h2>Contact Information</h2>
        </div>
        <div className="contact-info-body">
          <div className="body-header">
            <h4>Primary Contact</h4>
          </div>
          <div className="body-details">
            <label htmlFor="first-name">First Name</label>
            <input
              className="user-input-field"
              type="text"
              placeholder="First Name"
              id="first-name"
            />
            <label htmlFor="last-name">Last Name</label>
            <input
              className="user-input-field"
              type="text"
              placeholder="Last Name"
              id="last-name"
            />
            <label htmlFor="title">Title</label>
            <input
              className="user-input-field"
              type="text"
              placeholder="Title"
              id="title"
            />
            <label htmlFor="email">Email Address</label>
            <input
              className="user-input-field"
              type="email"
              placeholder="Email"
              id="email"
            />
            <label htmlFor="phone-number">Phone Number</label>
            <input
              className="user-input-field"
              type="text"
              placeholder="Phone Number"
              id="phone-number"
            />
          </div>
        </div>
        <div className="contact-info-body org-link-card">
          <div className="body-header">
            <h4>Proof of association with organization</h4>
          </div>
          <div className="link">
            {/* <label htmlFor=""></label> */}
            <input
              className="user-input-field"
              type="text"
              placeholder="Requester Profile (LinkedIn, organization page, etc."
            />
          </div>
        </div>
      </div>

      {/* Organization Info */}
      <div className="default-card org-details-section">
        <div className="section-header">
          <h2>Your Organization Information</h2>
        </div>
        <div className="org-details-body">
          <div>
            <div className="body-header">
              <h4>Organization</h4>
            </div>
            <div className="org-details">
              <label htmlFor="">Type</label>
              <input type="select" placeholder="Organization Type" />
              <label htmlFor="">Name</label>
              <input type="text" placeholder="Organization Name" />
              <label htmlFor="">Website</label>
              <input type="text" placeholder="Organization Website" />
            </div>
          </div>
          <div>
            <div className="body-header">
              <h4>Location</h4>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      {/* Terms & Condition */}
      <div className="default-card eula-wrapper">
        <div className="section-header">
          <h2>Terms and Conditions</h2>
        </div>
        <div className="eula-content">
          {/* <p>{EULA}</p> */}
          <div className="eula-checkbox">
            <input type="checkbox" />
            <label htmlFor="">I hereby agree to the Privacy Policy</label>
            <input type="checkbox" />
            <label htmlFor="">I hereby agree to the Terms & Conditions</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
