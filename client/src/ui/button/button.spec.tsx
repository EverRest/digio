import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

test("Button component render test", () => {
  render(
    <Button
      title=""
      disabled={false}
      color="primary"
      variant="contained"
    />
  );
});
