import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { renderWithRouter, rendererWithRouter } from "../../testHelpers";

import EmailModal from "./EmailModal";

describe("<EmailModal />", () => {
  it("should render the EmailModal component without crashing", () => {
    const helpers = renderWithRouter(
      <EmailModal darkmode={false} emailValues={{ success: true }} />
    );
  });

  it("should match the snapshot of EmailModal", () => {
    const tree = rendererWithRouter(
      <EmailModal darkmode={false} emailValues={{ success: true }} />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
