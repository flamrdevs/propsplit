import { describe, expect, it } from "vitest";

import propsplit from ".";

describe("propsplit", () => {
  it("Works", () => {
    const props = {
      foo: "string",
      bar: 1,
      baz: true,
      other: ["is", "array"],
      another: { is: "object" },
    };

    const splitted = propsplit(props, ["foo"], ["bar"], ["baz"]);

    expect(Array.isArray(splitted)).toBeTruthy();
    expect(splitted.length).toEqual(4);

    const [foo, bar, baz, rest] = splitted;

    expect(foo).toBeTypeOf("object");
    expect(foo).toHaveProperty("foo");
    expect(bar).toBeTypeOf("object");
    expect(bar).toHaveProperty("bar");
    expect(baz).toBeTypeOf("object");
    expect(baz).toHaveProperty("baz");
    expect(rest).toBeTypeOf("object");
    expect(rest).toHaveProperty("other");
    expect(rest).toHaveProperty("another");
  });
});
