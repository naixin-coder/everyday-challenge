// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<0>, -1>>,
  Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>
];

// ============= Your Code Here =============
type Digits = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`];
type MinusDights = Digits extends [...infer R, infer L] ? [L, ...R] : never; //Digits - 1 = [`9`, `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`]
type AddDights = Digits extends [infer F, ...infer R] ? [...R, F] : never; //Digits + 1 = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `0`]
type Split<T extends string | number> = T extends number
  ? Split<ToString<T>>
  : T extends `${infer F}${infer R}`
  ? [F, ...Split<R>]
  : [];
type Join<T extends string[]> = T extends [
  infer F extends string,
  ...infer R extends string[]
]
  ? `${F}${Join<R>}`
  : ``;
type RemovePrefixZero<T extends string> = T extends `${infer F}${infer R}`
  ? R extends `${number}`
    ? F extends `0`
      ? `${RemovePrefixZero<R>}`
      : T
    : T
  : T;
type ParseInt<T extends string> =
  RemovePrefixZero<T> extends `${infer R extends number}` ? R : never;
type ToString<T extends number> = `${T}`;
type TraverseMinus<T extends string[]> = T extends [
  ...infer R extends string[],
  infer L extends string
]
  ? L extends `0`
    ? [...TraverseMinus<R>, MinusDights[ParseInt<L>]]
    : [...R, MinusDights[ParseInt<L>]]
  : [];
type TraverseAdd<T extends string[]> = T extends [
  ...infer R extends string[],
  infer L extends string
]
  ? L extends `9`
    ? R extends []
      ? [`1`, `0`]
      : [...TraverseAdd<R>, AddDights[ParseInt<L>]]
    : [...R, AddDights[ParseInt<L>]]
  : [];

type MinusOne<T extends number> = ToString<T> extends `0` | `-`
  ? ParseInt<`-${Join<TraverseAdd<Split<T>>>}`> //-数字位加
  : ParseInt<Join<TraverseMinus<Split<T>>>>; //数字位减
