describe("CONFIG - DATABASE", () => {
  it("is connecting correctly", async () => {
    const { db } = await import("@/config/database");

    expect(db).toBeDefined();
    await expect(db.authenticate()).resolves.not.toThrow();
    await expect(db.close()).resolves.not.toThrow();
  });
});
