import React from "react";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import { renderWithRouter, rendererWithRouter } from "./testHelpers";

import App from "./App";

describe("<App />", () => {
  it("should render the App component without crashing", () => {
    const push = jest.fn();
    const scrollToSpy = jest.fn();
    window.scrollTo = scrollToSpy;
    const helpers = renderWithRouter(
      <App history={push} history={{ location: { pathname: "/" } }} />
    );
  });

  it("matches the snapshot of App", () => {
    const tree = rendererWithRouter(
      <App history={{ location: { pathname: "/" } }} />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
