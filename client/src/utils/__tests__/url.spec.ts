import { route } from "../url";

describe("Url units test", () => {
  describe("Root path", () => {
    it("should set client value to root path", () => {
      expect(route("root")).toBe(`/`);
    });
  });
  describe("Sign-in path", () => {
    it("should set client value to sign-in path", () => {
      expect(route("sign-in")).toBe(`auth/sign-in`);
    });
  });
  describe("Profile path", () => {
    it("should set client value to profile path", () => {
      expect(route("profile.general-information")).toBe(
        `profile/general-information`
      );
    });
  });
  describe("Users list path", () => {
    it("should set client value to users list path", () => {
      expect(route("users")).toBe(`users/user-management`);
    });
  });
  describe("Not path value", () => {
    it("should not set any client value", () => {
      expect(route("default")).toBe(`/`);
    });
  });
});
