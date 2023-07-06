// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
  Expect<Equal<Unique<[1, 2, 3, 4, 4, 5, 6, 7]>, [1, 2, 3, 4, 5, 6, 7]>>,
  Expect<Equal<Unique<[1, "a", 2, "b", 2, "a"]>, [1, "a", 2, "b"]>>,
  Expect<
    Equal<
      Unique<[string, number, 1, "a", 1, string, 2, "b", 2, number]>,
      [string, number, 1, "a", 2, "b"]
    >
  >,
  Expect<
    Equal<
      Unique<[unknown, unknown, any, any, never, never]>,
      [unknown, any, never]
    >
  >
];

// ============= Your Code Here =============
type Include<T extends any, U> = T extends [infer F, ...infer R]
  ? Equal<F, U> extends true
    ? true
    : Include<R, U>
  : false;

type Unique<T, N extends any[] = []> = T extends [infer F, ...infer R]
  ? Include<N, F> extends true
    ? Unique<R, N>
    : Unique<R, [...N, F]>
  : N;
// ? F extends N[number]
//   ? Unique<R, N>
//   : Unique<R, [...N, F]>
// : N;

// type T = Unique<[string, number, 1, "a", 1, string, 2, "b", 2, number]>;

// type A = Equal<"a", "a" | "b" | "c">;

// type B = "a" extends "a" | "b" | "c" ? true : false;

// type C = Exclude<unknown | unknown | any | any | never | never, any>;
