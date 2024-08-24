import { setSession, accessToken } from "../auth";

describe("Auth units test", () => {
  describe("setSession", () => {
    it("should set access token to local storage", () => {
      setSession("token", 111111111);
      expect(window.localStorage.getItem("accessToken")).toBe(accessToken());
    });
  });
});
