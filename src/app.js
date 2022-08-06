/**
 *  - RxJS is a library for composing asynchronous and event-based programs by using observable sequences.
 *    It provides one core type, the Observable, satellite types (Observer, Schedulers, Subjects) and operators inspired by Array methods
 *    (map, filter, reduce, every, etc) to allow handling asynchronous events as collections.
 *  - specify the dynamic behavior of a value completely at the time of its declaration
 *  - Think of RxJS as Lodash for events.
 *  - push vs pull
 *  - function + generator
 *        pull single & multiple values
 *      vs
 *    promise + observable
 *        push single & multiple values
 *
 */

import { from } from "rxjs";
import { printMessage } from "./utils";

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 1000);
});

const observable = from(promise);

observable.subscribe((message) => {
  printMessage(message);
});
