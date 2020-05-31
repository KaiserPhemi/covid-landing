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
      <div className="default-card def-info-section">
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
      <div className="default-card def-info-section org-details-section">
        <div className="section-header">
          <h2>Your Organization Information</h2>
        </div>
        <div className="contact-info-body org-details-body">
          <div>
            <div className="body-header">
              <h4>Organization</h4>
            </div>
            <div className="body-details">
              <label htmlFor="org-type">Organization Type</label>
              <select
                className="user-input-field drop-down"
                name="org-type"
                id="org-type"
              >
                <option value="organization-type" disabled selected>
                  Organization Type
                </option>
                <option value="">Supplier</option>
                <option value="">Manufacturer</option>
                <option value="">Individual</option>
              </select>

              <label htmlFor="">Name</label>
              <input
                className="user-input-field"
                type="text"
                placeholder="Organization Name"
              />
              <label htmlFor="">Website</label>
              <input
                className="user-input-field"
                user-input-fieldtype="text"
                placeholder="Organization Website"
              />
            </div>
          </div>
          <div className="">
            <div className="body-header">
              <h4>Location</h4>
            </div>
            <div className="body-details">
              <label htmlFor="address-line-1">Address Line 1</label>
              <input
                id="address-line-1"
                className="user-input-field"
                type="text"
                placeholder="Street address, P.O. box, company name, c/o"
              />

              <label htmlFor="address-line-2">Address Line 2</label>
              <input
                id="address-line-2"
                className="user-input-field"
                type="text"
                placeholder="Apartment, suite, unit, building, floor, etc."
              />

              <label htmlFor="city">City</label>
              <input
                className="user-input-field"
                type="text"
                id="city"
                placeholder="City"
              />

              <label htmlFor="region">State/Province/Region</label>
              <input
                className="user-input-field"
                type="text"
                id="region"
                placeholder="State/Province/Region"
              />

              <label htmlFor="zip">ZIP</label>
              <input
                id="zip"
                className="user-input-field"
                type="text"
                placeholder="ZIP"
              />

              <label htmlFor="country">Country</label>
              <input
                id="country"
                className="user-input-field"
                type="text"
                placeholder="Country"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Terms & Condition */}
      <div className="default-card def-info-section eula-wrapper">
        <div className="section-header">
          <h2>Terms and Conditions</h2>
        </div>
        <div className="contact-info-body eula-content">
          <p className="body-header">{EULA}</p>
          <div className="body-details">
            <div className="eula-checkbox">
              <input type="checkbox" id="privacy-policy" />
              <label htmlFor="privacy-policy">
                I hereby agree to the Privacy Policy
              </label>
            </div>
            <div className="eula-checkbox">
              <input type="checkbox" id="t-and-c" />
              <label htmlFor="t-and-c">
                I hereby agree to the Terms & Conditions
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
