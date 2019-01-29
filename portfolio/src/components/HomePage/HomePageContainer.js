import React, { Component } from "react";
import { HeaderContainer } from "../HeaderContent";
import { FeaturedWorkContainer } from "../FeaturedWork";

export default class HomePageContainer extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <FeaturedWorkContainer />
      </div>
    );
  }
}
