import { describe, it, expect } from "vitest";
import { TwigContext } from "../../context/TwigContext";
import { Component } from "../generics/ServiceLeaf";

describe("Testing ServiceLeaf", () => {
  @Component()
  class ServiceLeaf {}

  const context = TwigContext.getInstance();

  it("should make a service leaf", () => {
    expect(context.getLeavesSize()).toBe(1);
  });
});
