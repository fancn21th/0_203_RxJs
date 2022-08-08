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

import { Subject } from "rxjs";
import { printMessage } from "./utils";

const subject = new Subject();

// it may be called hot or cold before v6
subject.subscribe({
  next: (v) => printMessage(`observerA: ${v}`),
});
subject.subscribe({
  next: (v) => printMessage(`observerB: ${v}`),
});

subject.next(1);
subject.next(2);
