// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Fibonacci<1>, 1>>,
  Expect<Equal<Fibonacci<2>, 1>>,
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>
];

// ============= Your Code Here =============
type _Fibonacci<T extends number, N extends readonly 1[] = [1]> = T extends (
  | N
  | [...N, 1]
)["length"]
  ? [1]
  : [..._Fibonacci<T, [...N, 1]>, ..._Fibonacci<T, [...N, 1, 1]>];

type Fibonacci<T extends number, R = _Fibonacci<T>> = R extends any[]
  ? R["length"]
  : never;
