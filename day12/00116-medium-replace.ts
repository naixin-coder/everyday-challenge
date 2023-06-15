// ============== Question ==============

// Implement Replace<S, From, To> which replace the string From with To once in the given string S

// For example

// type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'

// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Replace<"foobar", "bar", "foo">, "foofoo">>,
  Expect<Equal<Replace<"foobarbar", "bar", "foo">, "foofoobar">>,
  Expect<Equal<Replace<"foobarbar", "", "foo">, "foobarbar">>,
  Expect<Equal<Replace<"foobarbar", "bar", "">, "foobar">>,
  Expect<Equal<Replace<"foobarbar", "bra", "foo">, "foobarbar">>,
  Expect<Equal<Replace<"", "", "">, "">>
];

// ============= Your Code Here =============
type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer F}${From}${infer L}`
  ? `${F}${To}${L}`
  : S;

type R = Replace<"foobarbar", "", "foo">;

type T = "bra" extends `${any}bar${any}` ? string : any;

type T2 = "foobar" extends `${any}bra${any}` ? string : any;

type T3 = "foobarbar" extends `${any}${any}` ? string : any;
