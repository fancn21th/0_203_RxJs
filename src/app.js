/**
 *  specify the dynamic behavior of a value completely at the time of its declaration
 *  在声明时完全指定一个值的动态行为
 *  行为编程
 */
const label = document.querySelector("label");

import { of, map } from "rxjs";

const streamA = of(1, 2, 3);

const streamB = streamA.pipe(map((x) => 10 * x));

streamB.subscribe((x) => {
  label.innerHTML += "," + x;
});
