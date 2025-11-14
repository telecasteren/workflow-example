import { isActivePath } from "js/utils/userInterface.js";

describe("isActivePath", (href) => {
  it("should return true when exact path matches", () => {
    const result = isActivePath(href === "/home", "/home");
    expect(result).toBe(true);
  });

  it("should return true when path is root or index", () => {
    const result = isActivePath("/", "/index.html");
    expect(result).toBe(true);
  });

  it("should return true when current path starts with the given path", () => {
    const result = isActivePath("/home", "/home/dashboard");
    expect(result).toBe(true);
  });

  it("should return false when paths do not match", () => {
    const result = isActivePath("/home", "/about");
    expect(result).toBe(false);
  });

  it("should return false when the path is longer than current path", () => {
    const result = isActivePath("/home/dashboard", "/home");
    expect(result).toBe(false);
  });
});
