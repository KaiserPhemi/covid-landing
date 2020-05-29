// react libraries
import React from "react";

// styles
import "./_footer.scss";

// components
import Logo from "../Common/Logo";

/**
 * @desc main footer of the page
 */
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer__logo">
        <Logo />
        <div className="copyright-text">© 2020 Response Inc.</div>
      </div>
      <div className="footer__product footer--column">
        <span className="footer--title ">Product</span>
        <div className="footer-links">
          <a href="#">Features</a>
        </div>
      </div>
      <div className="footer__legal footer--column">
        <span className="footer--title">Legal</span>
        <div className="footer-links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>
      </div>
      <div className="footer__info footer--column">
        <span className="footer--title">Company</span>
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Contact Us</a>
          <a href="#">+1 (844) 966-1910</a>
        </div>
      </div>
      <div className="footer__social footer--column">
        <span className="footer--title">Follow Us</span>
        <div className="footer-links">
          <a href="#">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
          <a href="#">
            <i className="fa fa-facebook" aria-hidden="true" />
            <span>Facebook</span>
          </a>
          <a href="#">
            <i className="fa fa-twitter" aria-hidden="true" />
            <span>Twitter</span>
          </a>
          <a href="#">
            <i className="fa fa-instagram" aria-hidden="true" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
