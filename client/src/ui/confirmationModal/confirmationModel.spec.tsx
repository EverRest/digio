import React from "react";
import { render, screen } from "../../mocks/customRenderer";
import { ConfirmationModal } from "./index";
import { RenderResult } from "@testing-library/react";

const renderComponent = (): RenderResult => {
  const setVisible = jest.fn();

  return render(
    <ConfirmationModal
      titleText="My popup"
      confirmText="Yes"
      visible={true}
      setVisible={setVisible}
    />,
    {}
  );
};

describe("confirmation popup", () => {
  beforeEach(() => {
    renderComponent();
  });

  it("should not show cancel button", () => {
    expect(screen.queryByTestId("cancel-button")).toBeFalsy();
  });
});
