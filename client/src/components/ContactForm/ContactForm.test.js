import React from "react";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import { renderWithRouter, rendererWithRouter } from "../../testHelpers";

import ContactForm from "./ContactForm";

describe("<ContactForm />", () => {
  it("should render the ContactForm component without crashing", () => {
    const push = jest.fn();
    const scrollToSpy = jest.fn();
    window.scrollTo = scrollToSpy;
    const helpers = renderWithRouter(
      <ContactForm darkmode={false} history={push} />
    );
  });

  it("should match the snapshot of ContactForm", () => {
    const tree = rendererWithRouter(<ContactForm darkmode={false} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should render the ContactForm text", () => {
    const { getByText } = renderWithRouter(<ContactForm darkmode={false} />);
    expect(getByText(/Get in Contact/i)).toBeDefined();
  });

  it("should render the inputs for the contact form", () => {
    const { getByTestId } = renderWithRouter(<ContactForm darkmode={false} />);
    expect(getByTestId("nameInput")).toBeDefined();
    expect(getByTestId("emailInput")).toBeDefined();
    expect(getByTestId("subjectInput")).toBeDefined();
    expect(getByTestId("contactInput")).toBeDefined();
  });
});
