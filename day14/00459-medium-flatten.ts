// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<
    Equal<
      Flatten<[{ foo: "bar"; 2: 10 }, "foobar"]>,
      [{ foo: "bar"; 2: 10 }, "foobar"]
    >
  >
];

// ============= Your Code Here =============
type Flatten<S extends any[], T extends any[] = []> = S extends [
  infer F,
  ...infer L
]
  ? F extends any[]
    ? Flatten<[...F, ...L], T>
    : Flatten<[...L], [...T, F]>
  : T;

type T = [[1, 2, 3]][number] extends any[] ? any : string;
