import { getUsername } from "js/utils/storage.js";
import { beforeEach } from "node:test";

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should return the username when it exists in localStorage", () => {
    localStorage.setItem("username", "testUser");
    const result = getUsername();
    expect(result).toBe("testUser");
  });

  it("should return null when the username does not exist in localStorage", () => {
    const result = getUsername();
    expect(result).toBeNull();
  });
});
