import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { renderWithRouter, rendererWithRouter } from "../../testHelpers";

import Logo from "./Logo";

describe("<Logo />", () => {
  it("should render the Logo component without crashing", () => {
    const helpers = renderWithRouter(<Logo darkmode={false} />);
  });

  it("should match the snapshot of Logo", () => {
    const tree = rendererWithRouter(<Logo darkmode={false} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
