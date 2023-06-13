// ============== Question ==============

// Sometimes, you may want to lookup for a type in a union to by their attributes.

// In this challenge, we would like to get the corresponding type by searching for the common type field in the union Cat | Dog. In other words, we will expect to get Dog for LookUp<Dog | Cat, 'dog'> and Cat for LookUp<Dog | Cat, 'cat'> in the following example.

// interface Cat {
//   type: 'cat'
//   breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
// }

// interface Dog {
//   type: 'dog'
//   breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
//   color: 'brown' | 'white' | 'black'
// }

// type MyDogType = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`

// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

interface Cat {
  type: "cat";
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
  type: "dog";
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
  color: "brown" | "white" | "black";
}

type Animal = Cat | Dog;

type cases = [
  Expect<Equal<LookUp<Animal, "dog">, Dog>>,
  Expect<Equal<LookUp<Animal, "cat">, Cat>>
];

// ============= Your Code Here =============
type LookUp<U, T> = U extends { type: T } ? U : never;
