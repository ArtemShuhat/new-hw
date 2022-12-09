"use strict";
let n = prompt("Введіть кількість сірників:");
while (n > 0) {
  alert("Твій хід");
  let m = prompt("Візьми сірники");
  if (isNaN(n || m)) {
    alert("Це не число");
    break;
  }
  if (m <= 0) {
    alert("Введіть число більше 0");
    break;
  } else if (m > 3) {
    alert("Введіть число менше  3");
    break;
  }
  n -= m;
  alert("залишилося " + n + " сірників");
  if (n <= 0) {
    alert("Ти переміг");
    break;
  }

  alert("Черга комп'ютера");
  let random = Math.floor(Math.random() * 3) + 1;
  n -= random;
  alert("залишилося " + n + " сірників");
  if (n <= 0) {
    alert("Комп'ютер переміг");
    break;
  }
}
