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

import { Observable, observeOn, asyncScheduler } from "rxjs";
import { printMessage } from "./utils";

const observable = new Observable((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
}).pipe(observeOn(asyncScheduler));

printMessage("just before subscribe");
observable.subscribe({
  next(x) {
    printMessage("got value " + x);
  },
  error(err) {
    console.error("something wrong occurred: " + err);
  },
  complete() {
    printMessage("done");
  },
});
printMessage("just after subscribe");
