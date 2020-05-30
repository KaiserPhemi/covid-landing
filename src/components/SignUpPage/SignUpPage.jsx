// react libraries
import React, { useState } from "react";

// styles
import "./_signup.scss";

// components
import SignUpPrompt from "./SignUpPrompt";
import ProductList from "./ProductList";
import ContactInfo from "./ContactInfo";

/**
 * @desc
 */
const SignUpPage = () => {
  const [pageStep, changeStep] = useState(1);

  /**
   * @desc takes us to the next page
   */
  const nextStep = () => {
    changeStep(pageStep + 1);
  };

  /**
   * @desc returns to the previous page
   */
  const prevPage = () => {
    changeStep(pageStep - 1);
  };

  /**
   * @desc determines what component to display
   */
  const showComponent = () => {
    switch (pageStep) {
      case 1:
        return <SignUpPrompt startReg={nextStep} />;
      case 2:
        return <ProductList nextReg={nextStep} prevReg={prevPage} />;
      case 3:
        return <ContactInfo nextReg={nextStep} prevReg={prevPage} />;
    }
  };

  /**
   * @desc returns the rendered DOM
   */
  return <div className="signup-page">{showComponent()}</div>;
};

export default SignUpPage;
