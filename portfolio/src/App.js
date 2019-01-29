import React, { Component } from "react";
import { GlobalStyle } from "./components/styles";
import { NavbarContainer } from "./components/NavBar";
import { HomePageContainer } from "./components/HomePage";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <NavbarContainer />
        <Route
          exact
          path="/"
          render={props => <HomePageContainer {...props} />}
        />
        <div className="App" />
      </>
    );
  }
}

export default App;
