import React from "react";
import { HeaderContainer } from "../HeaderContent";
import { FeaturedWorkContainer } from "../FeaturedWork";
import { Footer } from "../Footer";
import PropTypes from "prop-types";

const HomePageContainer = props => {
  return (
    <div>
      <HeaderContainer darkmode={props.darkmode} />
      <FeaturedWorkContainer darkmode={props.darkmode} />
      <Footer darkmode={props.darkmode} />
    </div>
  );
};

HomePageContainer.propTypes = {
  darkmode: PropTypes.bool.isRequired
};

export default HomePageContainer;
