import React from "react";
import { fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import { renderWithRouter, rendererWithRouter } from "../../testHelpers";

import NavbarContainer from "./NavbarContainer";

describe("<NavbarContainer />", () => {
  it("renders the Navbar component without crashing", () => {
    const mock = jest.fn();
    const helper = renderWithRouter(
      <NavbarContainer
        darkmode={false}
        setDarkmode={mock}
        history={{ location: { pathname: "/" } }}
      />
    );
  });

  it("matches the snapshot of NavbarContainer component", () => {
    const mock = jest.fn();
    const tree = rendererWithRouter(
      <NavbarContainer
        darkmode={false}
        setDarkmode={mock}
        history={{ location: { pathname: "/" } }}
      />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should render the navbar text to the screen", () => {
    const mock = jest.fn();
    const { getByText } = renderWithRouter(
      <NavbarContainer
        darkmode={false}
        setDarkmode={mock}
        history={{ location: { pathname: "/" } }}
      />
    );
    expect(getByText(/Work/i)).toBeDefined();
    expect(getByText(/Contact/i)).toBeDefined();
  });
});
