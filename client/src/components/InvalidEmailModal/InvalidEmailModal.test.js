import React from "react";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import { renderWithRouter, rendererWithRouter } from "../../testHelpers";

import InvalidEmailModal from "./InvalidEmailModal";

describe("<InvalidEmailModal />", () => {
  it("should render the InvalidEmailModal component without crashing", () => {
    const testFn = jest.fn();
    const helpers = renderWithRouter(
      <InvalidEmailModal darkmode={false} setInvalidEmailModal={testFn} />
    );
  });

  it("should match the snapshot of InvalidEmailModal", () => {
    const tree = rendererWithRouter(
      <InvalidEmailModal darkmode={false} emailValues={{ success: true }} />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
