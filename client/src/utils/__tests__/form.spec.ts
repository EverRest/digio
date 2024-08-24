import { mapBackendValidationErrors } from "../form";

describe("Form units test", () => {
  describe("mapBackendValidationErrors", () => {
    it("should return mapped object", () => {
      expect({
        one: "one",
        two: "one",
      }).toMatchObject(
        mapBackendValidationErrors({
          one: ["one", "two"],
          two: ["one", "two"],
        })
      );
    });
  });
});
