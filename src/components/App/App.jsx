// react libraries
import React from "react";

// styles
import "./app.scss";

// components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LandingPage from "../LandingPage/LandingPage";

/**
 * @desc app entry
 */
const App = () => {
  return (
    <div className="app-container">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
};

export default App;
