// ============== Question ==============

// Implement Trim<T> which takes an exact string type and returns a new string with the whitespace from both ends removed.

// For example

// type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'

// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Trim<"str">, "str">>,
  Expect<Equal<Trim<" str">, "str">>,
  Expect<Equal<Trim<"     str">, "str">>,
  Expect<Equal<Trim<"str   ">, "str">>,
  Expect<Equal<Trim<"     str     ">, "str">>,
  Expect<Equal<Trim<"   \n\t foo bar \t">, "foo bar">>,
  Expect<Equal<Trim<"">, "">>,
  Expect<Equal<Trim<" \n\t ">, "">>
];

// ============= Your Code Here =============
type Space = " " | "\n" | "\t";
type Trim<S extends string> = S extends
  | `${Space}${infer R}${Space}`
  | `${Space}${infer R}`
  | `${infer R}${Space}`
  ? Trim<R>
  : S;
