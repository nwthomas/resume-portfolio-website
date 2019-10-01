import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { renderWithRouter, rendererWithRouter } from "../../testHelpers";

import SendingModal from "./SendingModal";

describe("<SendingModal />", () => {
  it("should render the SendingModal component without crashing", () => {
    const helpers = renderWithRouter(<SendingModal darkmode={false} />);
  });

  it("should match the snapshot of SendingModal", () => {
    const tree = rendererWithRouter(<SendingModal darkmode={false} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
