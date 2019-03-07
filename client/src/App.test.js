import React from "react";
import renderer from "react-test-renderer";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import { renderWithRouter, rendererWithRouter } from "./testHelpers"; // Necessary to simulate React Router

import App from "./App";

describe("<App />", () => {
  it("renders the App component without crashing", () => {
    const push = jest.fn();
    const scrollToSpy = jest.fn();
    window.scrollTo = scrollToSpy;
    const helpers = renderWithRouter(<App history={push} />);
  });

  it("matches the snapshot of App", () => {
    const tree = rendererWithRouter(<App />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
