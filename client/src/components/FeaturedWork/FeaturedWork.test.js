import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { renderWithRouter, rendererWithRouter } from "../../testHelpers";

import FeaturedWorkContainer from "./FeaturedWorkContainer";

describe("<FeaturedWorkContainer />", () => {
  it("should render the FeaturedWorkContainer component without crashing", () => {
    renderWithRouter(<FeaturedWorkContainer darkmode={false} />);
  });

  it("should match the snapshot of FeaturedWorkContainer", () => {
    const tree = rendererWithRouter(<FeaturedWorkContainer darkmode={true} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should render the component text", () => {
    const { getByText } = renderWithRouter(
      <FeaturedWorkContainer darkmode={true} />
    );
    expect(getByText(/tippr payment app/i)).toBeDefined();
    expect(getByText(/Featured Projects/i)).toBeDefined();
  });

  it("should render the projects pictures successfully", () => {
    const { getByTestId } = renderWithRouter(
      <FeaturedWorkContainer darkmode={true} />
    );
    expect(getByTestId("tipprPicture")).toBeDefined();
    expect(getByTestId("instagramPicture")).toBeDefined();
    expect(getByTestId("huddlePicture")).toBeDefined();
    expect(getByTestId("confluxPicture")).toBeDefined();
    expect(getByTestId("stampdPicture")).toBeDefined();
    expect(getByTestId("weightLiftingJournalPicture")).toBeDefined();
  });
});
