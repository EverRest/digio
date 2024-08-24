import React from "react";
import { render, RenderResult } from "@testing-library/react";
import App from "./App";
import { ThemeProvider } from "./contexts/ThemeContext";
import { BrowserRouter } from "react-router-dom";

const renderComponent = (): RenderResult => {
  return render(
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  );
};

jest.mock("react-datepicker/dist/react-datepicker.css", () => ({}));
describe("Home page", () => {
  it("renders Home page", async () => {
    renderComponent();
  });
});
