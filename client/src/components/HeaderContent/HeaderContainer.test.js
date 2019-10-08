import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { renderWithRouter, rendererWithRouter } from "../../testHelpers";

import HeaderContainer from "./HeaderContainer";

describe("<HeaderContainer />", () => {
  it("should render the HeaderContainer component without crashing", () => {
    const helpers = renderWithRouter(<HeaderContainer darkmode={false} />);
  });

  it("should match the snapshot of HeaderContainer", () => {
    const tree = rendererWithRouter(<HeaderContainer darkmode={true} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should display the header content text", () => {
    const { getByText } = renderWithRouter(<HeaderContainer darkmode={true} />);
    expect(getByText(/I'm Nathan Thomas/i)).toBeDefined();
  });

  it("should render the logos", () => {
    const { getByTestId } = renderWithRouter(
      <HeaderContainer darkmode={true} />
    );
    expect(getByTestId("schoolLogo")).toBeDefined();
    expect(getByTestId("twitterLogo")).toBeDefined();
  });
});
