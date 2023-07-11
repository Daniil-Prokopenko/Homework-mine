"use strict";

//Завдання 1
//Перший спосіб
console.log(TaskOne_1);

function TaskOne_1(a, b) {
  return a + b;
} //Другий спосіб


var TaskOne_2 = function TaskOne_2(a, b) {
  return a * b;
};

console.log(TaskOne_2); //Завдання 2

function TaskTwo() {
  return arguments.length;
} //Завдання 3


function calcSum(a, b) {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else if (a = b) {
    return 0;
  }
}

function TaskThree() {
  var numOne = parseInt(document.getElementById('Task_3_1').value);
  var numTwo = parseInt(document.getElementById('Task_3_2').value);
  var result = calcSum(numOne, numTwo);
  document.getElementById('Task_3_result').innerText = "Your number : ".concat(result);
} //Завдання 4


function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}

function TaskFour() {
  var n = parseInt(document.getElementById('Task_4').value);
  var result = factorial(n);
  document.getElementById('Task_4_result').innerText = "Your factorial is ".concat(result);
} //Завдання 6


function TaskSix(w) {
  var h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : w;
  return h * w;
}

TaskSix(10, 12);
TaskSix(12); //Завдання 7

function checkPerfectNumber(number) {
  var temp = 0;

  for (var i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      temp += i;
    }
  }

  if (temp === number && temp !== 0) {
    alert("Досконале число");
  } else {
    alert("Не досконале число");
  }
}

function TaskSeven() {
  var number = parseInt(prompt('Введіть число на перевірку'));
  var result = checkPerfectNumber(number);
} //Завдання 8


function getPerfectNumber(a, b) {
  var result = [];

  for (var i = a; i < b; i++) {
    sum = 0;

    for (var n = 1; n <= i / 2; n++) {
      if (i % n === 0) sum += n;
    }

    if (i === sum) result.push(i);
  }

  return result;
}

function TaskEight() {
  var numOne = parseInt(document.getElementById('Task_8_1').value);
  var numTwo = parseInt(document.getElementById('Task_8_2').value);
  var result = getPerfectNumber(numOne, numTwo);
  document.getElementById('Task_8_result').innerText = "Perfect number : ".concat(result);
}