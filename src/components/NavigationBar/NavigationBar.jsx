// react libraries
import React from "react";

/**
 * @desc navigation bar
 */
const NavigationBar = () => {
  return (
    <div>
      NavigationBar
    </div>
  );
};

export default NavigationBar;

<div
  data-collapse="none"
  data-animation="default"
  data-duration="400"
  role="banner"
  class="nav-section w-nav"
>
  <div class="wrapper w-container">
    <nav class="nav-panel w-clearfix">
      <a
        href="/"
        aria-current="page"
        class="logo-desktop w-nav-brand w--current"
      >
        <img
          src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5d0aaf93cfe3203389aaebf9_logo-blue.svg"
          alt="Response logo"
          height="24"
          width="100"
        />
      </a>
      <a
        href="/"
        aria-current="page"
        class="logo-mobile w-nav-brand w--current"
      >
        <img
          src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5d0af07651a0ceac91d3fcbe_icon-blue.svg"
          alt="Response logo"
          height="24"
          width="20"
        />
      </a>
      <div class="nav-link-container middle links">
        <a href="/group-purchasing" class="nav-link w-inline-block">
          <div class="nav-link-text">Group Purchasing</div>
        </a>
        <a href="/about" class="nav-link w-inline-block">
          <div class="nav-link-text">About</div>
        </a>
        <a href="/contact-us" class="nav-link w-inline-block">
          <div class="nav-link-text">Contact Us</div>
        </a>
      </div>
      <div class="login right links">
        <a
          href="http://app.tryresponse.com/login"
          class="low-emphasis-button w-button"
        >
          Log in
        </a>
        <a
          href="http://app.tryresponse.com/covid/requests/new"
          class="high-emphasis-button demand w-button"
        >
          Request
        </a>
        <a
          href="http://app.tryresponse.com/covid/responses/new"
          class="high-emphasis-button w-button"
        >
          Supply
        </a>
      </div>
    </nav>
  </div>
  <div class="w-nav-overlay" data-wf-ignore=""></div>
</div>;
