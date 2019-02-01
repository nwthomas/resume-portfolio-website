import React, { useState } from "react";
import { GlobalStyle } from "./components/styles";
import { NavbarContainer } from "./components/NavBar";
import { HomePageContainer } from "./components/HomePage";
import { Route } from "react-router-dom";
import styled, { css } from "styled-components";

const AppDiv = styled.div`
  width: 100%;
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
      <AppDiv darkmode={darkmode} className="App">
        <NavbarContainer setDarkmode={setDarkmode} darkmode={darkmode} />
        <Route
          exact
          path="/"
          render={props => <HomePageContainer {...props} darkmode={darkmode} />}
        />
      </AppDiv>
    </>
  );
};

export default App;
