// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";
import { ExpectFalse, NotEqual } from "./test-utils";

type cases = [
  Expect<Equal<CheckRepeatedChars<"abc">, false>>,
  Expect<Equal<CheckRepeatedChars<"abb">, true>>,
  Expect<Equal<CheckRepeatedChars<"cbc">, true>>,
  Expect<Equal<CheckRepeatedChars<"">, false>>
];

// ============= Your Code Here =============
type CheckRepeatedChars<
  T extends string,
  R extends string[] = []
> = T extends `${infer F}${infer L}`
  ? F extends R[number]
    ? true
    : CheckRepeatedChars<L, [...R, F]>
  : false;

type T = CheckRepeatedChars<"abb">;
