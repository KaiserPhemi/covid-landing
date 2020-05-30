// react libraries
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// styles
import "./app.scss";

// components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LandingPage from "../LandingPage/LandingPage";
import SignUpPage from "../SignUpPage/SignUpPage";

/**
 * @desc app entry
 */
const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/register" component={SignUpPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
