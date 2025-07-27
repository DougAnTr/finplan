describe("CONFIG  - ENV", () => {
  it("is parsed correctly", async () => {
    const env = await import("@/config/env");
    expect(env).toBeDefined();
  });
});
