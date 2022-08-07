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

import { interval } from "rxjs";
import { printMessage } from "./utils";
const btnStart = document.getElementById("btnStart");
const btnStop = document.getElementById("btnStop");

const observable = interval(1000 /* number of milliseconds */);

const handler = (value) => {
  printMessage(new Date().getSeconds());
};

let subscription;

subscription = observable.subscribe(handler);

btnStart.addEventListener("click", function () {
  subscription = observable.subscribe(handler);
});

btnStop.addEventListener("click", function () {
  subscription.unsubscribe();
});
