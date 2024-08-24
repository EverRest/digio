import React from "react";
import { render, screen } from "../../mocks/customRenderer";
import FormAlert from "./FormAlert";
import { FormMessageInterface } from "../../types/form";
import { RenderResult } from "@testing-library/react";
import { AlertProps } from "./types";

const renderComponent = (props: AlertProps): RenderResult => {
  return render(<FormAlert {...props} />, {});
};

const alertMessage = "test alert";

describe("FormAlert", () => {
  beforeEach(() => {
    const formMessage: FormMessageInterface = {
      type: "warning",
      text: alertMessage,
    };
    renderComponent({ formMessage });
  });
  describe("When component mounted", () => {
    it("should render", () => {
      expect(screen.getByText(alertMessage)).toBeInTheDocument();
    });
  });
});
