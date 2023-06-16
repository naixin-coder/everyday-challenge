// ============== Question ==============

// Type the function PromiseAll that accepts an array of PromiseLike objects, the returning value should be Promise<T> where T is the resolved result array.

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise<string>((resolve, reject) => {
//   setTimeout(resolve, 100, "foo");
// });

// // expected to be `Promise<[number, 42, string]>`
// const p = PromiseAll([promise1, promise2, promise3] as const);

// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

const promiseAllTest1 = PromiseAll([1, 2, 3] as const);
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const);
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)]);
const promiseAllTest4 = PromiseAll<Array<number | Promise<number>>>([1, 2, 3]);

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>,
  Expect<Equal<typeof promiseAllTest4, Promise<number[]>>>
];

// ============= Your Code Here =============

declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{
  [K in keyof T]: T[K] extends Promise<infer R> | infer R ? R : never;
}>;

// 可以将数组转换为对象进行处理