import React from "react";
import { render, screen } from "../../mocks/customRenderer";
import { RenderResult } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Autocomplete from "./Autocomplete";
import de from "../../langs/de";

const props = {
  id: "jest-autocomplete",
  name: "jest_auto_complete",
  handleOptionSelect: () => {},
  placeholder: "Jest",
  value: "",
  autocompleteValue: "",
  error: false,
  helperText: false,
  debounceTime: 0,
  optionLabel: "",
  optionValue: "value",
};

const renderComponent = (handleOnChangeInputText: jest.Mock): RenderResult => {
  return render(
    <Autocomplete
      {...props}
      handleOnChangeInputText={handleOnChangeInputText}
    />,
    {}
  );
};

const handleOnChangeInputText = jest.fn().mockImplementationOnce(async () => {
  await Promise.reject();
});

describe("Autocomplete", () => {
  describe("Check error block", () => {
    beforeEach(async () => {
      renderComponent(handleOnChangeInputText);
      const autocompleteInput = await screen.findByLabelText(props.placeholder);
      userEvent.type(autocompleteInput, "Jest");
    });

    it("Should show No options text if error throw from API", async () => {
      expect(await screen.findByText(de.translation.startTyping)).toBeTruthy();
    });
  });
});
