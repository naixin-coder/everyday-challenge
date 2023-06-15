// ============== Question ==============

// Implement ReplaceAll<S, From, To> which replace the all the substring From with To in the given string S

// For example

// type replaced = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'

// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<ReplaceAll<"foobar", "bar", "foo">, "foofoo">>,
  Expect<Equal<ReplaceAll<"foobar", "bag", "foo">, "foobar">>,
  Expect<Equal<ReplaceAll<"foobarbar", "bar", "foo">, "foofoofoo">>,
  Expect<Equal<ReplaceAll<"t y p e s", " ", "">, "types">>,
  Expect<Equal<ReplaceAll<"foobarbar", "", "foo">, "foobarbar">>,
  Expect<Equal<ReplaceAll<"barfoo", "bar", "foo">, "foofoo">>,
  Expect<Equal<ReplaceAll<"foobarfoobar", "ob", "b">, "fobarfobar">>,
  Expect<Equal<ReplaceAll<"foboorfoboar", "bo", "b">, "foborfobar">>,
  Expect<Equal<ReplaceAll<"", "", "">, "">>
];

// ============= Your Code Here =============
type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer F}${From}${infer L}`
  ? // ? ReplaceAll<`${F}${To}${L}`, From, To>
    `${ReplaceAll<F, From, To>}${To}${ReplaceAll<L, From, To>}`
  : S;

// type T = ReplaceAll<"foobarfoobar", "ob", "b">;

// type T1 = " " extends `${infer F} ${infer L}` ? string : any;
