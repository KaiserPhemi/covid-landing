// react libraries
import React, { useState } from "react";

// styles
import "./_signup.scss";

// components
import SignUpPrompt from "./SignUpPrompt";
import ProductList from "./ProductList";
import ContactInfo from "./ContactInfo";
import Button from "../Common/Button";

/**
 * @desc
 */
const SignUpPage = () => {
  const [pageStep, changeStep] = useState(3);

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
    console.log("prev page");
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
  return (
    <div className="signup-page">
      {showComponent()}
      {pageStep !== 1 && (
        <div className="nav-btn">
          <Button btnText="Back" onClick={() => prevPage()} />
          <Button
            btnText={pageStep === 3 ? `Submit` : `Continue`}
            onClick={() => nextStep()}
          />
        </div>
      )}
    </div>
  );
};

export default SignUpPage;
