import React, { useState } from "react";
import { GlobalStyle } from "./components/styles";
import { Route } from "react-router-dom";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { NavbarContainer } from "./components/NavBar";
import { HomePageContainer } from "./components/HomePage";
import { ContactForm } from "./components/ContactForm";
import { EmailModal } from "./components/EmailModal";
import { SendingModal } from "./components/SendingModal";

const AppDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  background: white;
  padding: 0 5%;
  position: relative;

  ${props =>
    props.darkmode &&
    css`
      background: #1a2431;
    `}

  ${props =>
    (props.displayModal || props.sending) &&
    css`
      overflow: hidden;
      position: fixed;
    `}
`;

const App = props => {
  const pullMode = localStorage.getItem("darkMode") === "true" ? true : false;
  const [darkmode, setDarkmode] = useState(pullMode);
  const [emailValues, setEmailValues] = useState({
    sending: false,
    success: props.null,
    displayModal: false,
    modalText: ""
  });

  return (
    <>
      <GlobalStyle />
      <AppDiv
        darkmode={darkmode}
        sending={emailValues.sending}
        displayModal={emailValues.displayModal}
      >
        {emailValues.displayModal && (
          <EmailModal
            emailValues={emailValues}
            setEmailValues={setEmailValues}
            darkmode={darkmode}
            match={props.match}
            history={props.history}
          />
        )}
        {emailValues.sending && <SendingModal darkmode={darkmode} />}
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
            render={props => (
              <ContactForm
                {...props}
                darkmode={darkmode}
                emailValues={emailValues}
                setEmailValues={setEmailValues}
              />
            )}
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
