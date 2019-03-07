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
      <NavbarContainer darkmode={false} setDarkmode={mock} />
    );
  });

  it("matches the snapshot of NavbarContainer component", () => {
    const mock = jest.fn();
    const tree = rendererWithRouter(
      <NavbarContainer darkmode={false} setDarkmode={mock} />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should render the navbar text to the screen", () => {
    const mock = jest.fn();
    const { getByText } = renderWithRouter(
      <NavbarContainer darkmode={false} setDarkmode={mock} />
    );
    expect(getByText(/Work/i)).toBeDefined();
    expect(getByText(/Contact/i)).toBeDefined();
  });

  it("should call a function when the darkmode tab is clicked", () => {
    const mock = jest.fn();
    const { getByTestId } = renderWithRouter(
      <NavbarContainer darkmode={false} setDarkmode={mock} />
    );
    const darkmodeTab = getByTestId("darkmodeTab");
    fireEvent.click(darkmodeTab);
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
