import React, { useState } from "react";
import { GlobalStyle } from "./components/styles";
import { Route } from "react-router-dom";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import { NavbarContainer } from "./components/NavBar";
import { HomePageContainer } from "./components/HomePage";
import { ContactForm } from "./components/ContactForm";

const AppDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  background: white;

  ${props =>
    props.darkmode &&
    css`
      background: #2f3234;
    `}
`;

const App = () => {
  const pullMode = localStorage.getItem("darkMode") === "true" ? true : false;
  const [darkmode, setDarkmode] = useState(pullMode);

  return (
    <>
      <GlobalStyle />
      <AppDiv darkmode={darkmode}>
        <div>
          <NavbarContainer setDarkmode={setDarkmode} darkmode={darkmode} />
          <Route
            exact
            path="/"
            render={props => (
              <HomePageContainer {...props} darkmode={darkmode} />
            )}
          />
          <Route
            path="/contact"
            render={props => <ContactForm {...props} darkmode={darkmode} />}
          />
        </div>
      </AppDiv>
    </>
  );
};

App.propTypes = {
  darkmode: PropTypes.bool,
  setDarkmode: PropTypes.func
};

export default App;
