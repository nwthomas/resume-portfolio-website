import React from "react";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import { renderWithRouter, rendererWithRouter } from "../../testHelpers";

import HomePageContainer from "./HomePageContainer";

describe("<HomePageContainer />", () => {
  it("should render the HomePageContainer component without crashing", () => {
    const push = jest.fn();
    const scrollToSpy = jest.fn();
    window.scrollTo = scrollToSpy;
    const helpers = renderWithRouter(
      <HomePageContainer darkmode={false} history={push} />
    );
  });

  it("should match the snapshot of HomePageContainer", () => {
    const tree = rendererWithRouter(<HomePageContainer darkmode={true} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should display the HeaderContainer component", () => {
    const { getByText } = renderWithRouter(
      <HomePageContainer darkmode={false} />
    );
    expect(getByText(/I'm Nathan Thomas/i)).toBeDefined();
  });

  it("should display the FeaturedWorkContainer component", () => {
    const { getByText } = renderWithRouter(
      <HomePageContainer darkmode={false} />
    );
    expect(getByText(/Featured Projects/i)).toBeDefined();
  });

  it("should display the Footer component", () => {
    const { getByText } = renderWithRouter(
      <HomePageContainer darkmode={false} />
    );
    expect(getByText(/Looking to start a project\?/i)).toBeDefined();
  });
});
