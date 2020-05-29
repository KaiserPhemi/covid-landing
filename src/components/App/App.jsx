// react libraries
import React from "react";

// components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// styles
import "./app.scss";

/**
 * @desc app entry
 */
const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Footer />
    </div>
  );
};

export default App;
