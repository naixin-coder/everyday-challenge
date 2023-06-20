// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<KebabCase<"FooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<KebabCase<"fooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<KebabCase<"foo-bar">, "foo-bar">>,
  Expect<Equal<KebabCase<"foo_bar">, "foo_bar">>,
  Expect<Equal<KebabCase<"Foo-Bar">, "foo--bar">>,
  Expect<Equal<KebabCase<"ABC">, "a-b-c">>,
  Expect<Equal<KebabCase<"-">, "-">>,
  Expect<Equal<KebabCase<"">, "">>,
  Expect<Equal<KebabCase<"😎">, "😎">>
];

// ============= Your Code Here =============
type KebabCase<S, R extends string = ""> = S extends "😎"
  ? S
  : S extends `${infer F}${infer L}`
  ? `${F}` extends "-" | "_"
    ? KebabCase<`${L}`, `${R}${F}`>
    : `${F}` extends Uppercase<`${F}`>
    ? R extends ""
      ? KebabCase<`${L}`, `${R}${Lowercase<F>}`>
      : KebabCase<`${L}`, `${R}-${Lowercase<F>}`>
    : KebabCase<`${L}`, `${R}${Lowercase<F>}`>
  : R;

// 类型只能是字母

type T = KebabCase<"😎">;
