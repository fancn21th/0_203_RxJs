const button = document.querySelector("button");
const label = document.querySelector("label");

import { fromEvent } from "rxjs";

fromEvent(button, "click").subscribe(() => {
  label.innerHTML = "Clicked";
});

setInterval(() => {
  const len = Math.floor(Math.random() * 3);
  const arr = new Array(len).fill(".");
  label.innerHTML = arr.join("");
}, 1250);
