import React from "react";
import { HeaderContainer } from "../HeaderContent";
import { FeaturedWorkContainer } from "../FeaturedWork";
import { Footer } from "../Footer";

const HomePageContainer = props => {
  return (
    <div>
      <HeaderContainer darkmode={props.darkmode} />
      <FeaturedWorkContainer darkmode={props.darkmode} />
      <Footer darkmode={props.darkmode} />
    </div>
  );
};

export default HomePageContainer;
