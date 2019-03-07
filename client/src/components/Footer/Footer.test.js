import React from "react";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import { renderWithRouter, rendererWithRouter } from "../../testHelpers";

import Footer from "./Footer";

describe("<Footer />", () => {
  it("should render the Footer component without crashing", () => {
    const helpers = renderWithRouter(<Footer darkmode={false} />);
  });

  it("should match the snapshot of Footer", () => {
    const tree = rendererWithRouter(<Footer darkmode={false} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should render all footer links to the screen", () => {
    const { getByText } = renderWithRouter(<Footer darkmode={false} />);
    expect(getByText(/GitHub/i)).toBeDefined();
    expect(getByText(/LinkedIn/i)).toBeDefined();
    expect(getByText(/Medium/i)).toBeDefined();
    expect(getByText(/Twitter/i)).toBeDefined();
    expect(getByText(/Instagram/i)).toBeDefined();
    expect(getByText(/Email/i)).toBeDefined();
  });

  it("should render the copyright section to the screen", () => {
    const { getByText } = renderWithRouter(<Footer darkmode={false} />);
    expect(getByText(/Copyright © 2019 Nathan Thomas/i)).toBeDefined();
  });
});
