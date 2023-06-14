// ============== Question ==============

// Implement TrimLeft<T> which takes an exact string type and returns a new string with the whitespace beginning removed.

// For example

// type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '

// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<TrimLeft<"str">, "str">>,
  Expect<Equal<TrimLeft<" str">, "str">>,
  Expect<Equal<TrimLeft<"     str">, "str">>,
  Expect<Equal<TrimLeft<"     str     ">, "str     ">>,
  Expect<Equal<TrimLeft<"   \n\t foo bar ">, "foo bar ">>,
  Expect<Equal<TrimLeft<"">, "">>,
  Expect<Equal<TrimLeft<" \n\t">, "">>
];

// ============= Your Code Here =============
// const str = '123' as string;
// type S =
type Space = " " | "\n" | "\t";
type TrimLeft<S extends string> = S extends `${Space}${infer R}`
  ? TrimLeft<R>
  : S;
