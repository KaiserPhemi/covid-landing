// react libraries
import React from "react";

// utils
import {
  BANNER_IMG_URL_1,
  BANNER_IMG_URL_2,
  BANNER_IMG_URL_3,
  BANNER_IMG_URL_4,
  BANNER_IMG_URL_5,
} from "../../utils/constants";

/**
 * @desc
 */
const LandingPageBanner = () => {
  return (
    <div className="page__banner">
      <div className="banner-left">
        <h5 className="column-header">LIFESAVING PROCUREMENT</h5>
        <h1 className="column-sub-header">Sourcing for COVID-19</h1>
        <p className="header-text">
          Response connects healthcare providers to medical suppliers with a
          sourcing platform built to accelerate emergency procurement.
        </p>
        <div className="btn__wrapper">
          <button href="#" className="banner__cta-btn">
            Request Medical Equipment
          </button>
          <span className="btn__caption">
            {`Questions? `}
            <a href="#">Talk to us</a>
          </span>
        </div>
      </div>
      <div className="banner-right">
        <img
          src={BANNER_IMG_URL_1}
          alt="banner_img_1"
          className="banner__img banner_img_1"
        />
        <img
          src={BANNER_IMG_URL_5}
          alt="banner_img_5"
          className="banner__img banner_img_5"
        />
        <img
          src={BANNER_IMG_URL_2}
          alt="banner_img_2"
          className="banner__img banner_img_2"
        />
        <img
          src={BANNER_IMG_URL_3}
          alt="banner_img_3"
          className="banner__img banner_img_3"
        />
        <img
          src={BANNER_IMG_URL_4}
          alt="banner_img_4"
          className="banner__img banner_img_4"
        />
      </div>
    </div>
  );
};

export default LandingPageBanner;
