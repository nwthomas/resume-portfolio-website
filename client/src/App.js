import React, { useState } from "react";
import { GlobalStyle } from "./components/styles";
import { Route } from "react-router-dom";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { useStateValue } from "react-conflux";
import { NavbarContainer } from "./components/NavBar";
import { HomePageContainer } from "./components/HomePage";
import { ContactForm } from "./components/ContactForm";
import { EmailModal } from "./components/EmailModal";
import { SendingModal } from "./components/SendingModal";
import { InvalidEmailModal } from "./components/InvalidEmailModal";
import { darkContext } from "./store/contexts";
import { StateProvider } from "react-conflux";
import { formContext } from "./store/contexts";
import { formReducer } from "./store/reducers/formReducer";

const AppDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  background: white;
  padding: 0 5%;
  position: relative;

  ${props =>
    props.darkmode &&
    css`
      background: #1b2331;
    `}

  ${props =>
    (props.displayModal || props.sending) &&
    css`
      overflow: hidden;
      position: fixed;
    `}
`;

const App = props => {
  const [state] = useStateValue(darkContext);
  const { darkmode } = state;
  const [invalidEmailModal, setInvalidEmailModal] = useState(false);
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
        {invalidEmailModal && (
          <InvalidEmailModal
            setInvalidEmailModal={setInvalidEmailModal}
            darkmode={darkmode}
          />
        )}
        <div>
          <NavbarContainer darkmode={darkmode} history={props.history} />
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
              <StateProvider reducer={formReducer} stateContext={formContext}>
                <ContactForm
                  {...props}
                  darkmode={darkmode}
                  emailValues={emailValues}
                  setEmailValues={setEmailValues}
                  setInvalidEmailModal={setInvalidEmailModal}
                />
              </StateProvider>
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
