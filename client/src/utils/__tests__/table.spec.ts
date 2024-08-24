import { getSelectAllClickHandler } from "../table";
import { ChangeEvent } from "react";

describe("table units test", () => {
  describe("getSelectAllClickHandler", () => {
    const data = [
      {
        name: "some name",
        mock: "property",
      },
    ];
    const event = {
      target: {
        value: "z",
        checked: true,
      },
    } as ChangeEvent<HTMLInputElement>;
    const setSelected = jest.fn();
    it("should call setSelected fn with new selects", () => {
      getSelectAllClickHandler(data, setSelected)(event);
      expect(setSelected).toBeCalledWith(data.map((n) => n.name));
    });
    it("should call setSelected fn with an empty array", () => {
      event.target.checked = false;
      getSelectAllClickHandler(data, setSelected)(event);
      expect(setSelected).toBeCalledWith([]);
    });
  });
});
