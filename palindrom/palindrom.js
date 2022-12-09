"use strict";
let palindroms = [
  "А роза упала на лапу Азора",
  "Ого",
  "А Собака боса",
  "Привет, мир",
  "А Собака боса",
  "Лёша на полке клопа нашёл",
  "Я — арка края",
];

function checkPalinrom(arr) {
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i].toLowerCase();

    str = str.replaceAll(" ", "");
    str = str.replaceAll(",", "");
    str = str.replaceAll("—", "");
    let arrStr = str.split("");
    arrStr.reverse();
    let reverseStr = arrStr.join("");
    let reverseArr = reverseStr.split();
    document.write(reverseArr + "</br>");
  }
}
checkPalinrom(palindroms);
