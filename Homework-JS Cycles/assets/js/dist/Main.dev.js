"use strict";

function Task() {
  var a = 0.1;
  var b = 0.2;
  var result = 0;
  result = a + b;
  alert(result.toFixed(1));
}

function Task_one() {
  var age = parseInt(prompt('Enter your age'));

  if (age >= 0 && age < 12) {
    alert('You are children!');
  } else if (age >= 12 && age < 18) {
    alert('You are teenager!');
  } else if (age >= 18 && age < 59) {
    alert('You are adult!');
  } else if (age >= 59) {
    alert('You are pensioner');
  } else {
    alert('Enter valid age!');
  }
}

function Task_two() {
  var v = parseInt(prompt('Enter your number'));

  if (v === 1) {
    alert('!');
  } else if (v === 2) {
    alert('@');
  } else if (v === 3) {
    alert('#');
  } else if (v === 4) {
    alert('$');
  } else if (v === 5) {
    alert('%');
  } else if (v === 6) {
    alert('^');
  } else if (v === 7) {
    alert('&');
  } else if (v === 8) {
    alert('*');
  } else if (v === 9) {
    alert('(');
  } else {
    alert('Enter valid value!');
  }
}

function TaskThree() {
  var i = parseInt(prompt('Eenter the beginning of the range', ''));
  var b = parseInt(prompt('Enter the end of the range', ''));
  var sum = 0;

  while (i <= b) {
    sum += i;
    i++;
  }

  alert(sum);
}

function TaskFour() {
  var a = parseInt(prompt('Enter first number'));
  var b = parseInt(prompt('Enter second number'));
  var c;

  while (a != b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }

  c = a;
  alert(c);
}

function TaskFive() {
  var num = parseInt(prompt('Enter your number'));
  var result = '';

  if (isNaN(num)) {
    alert('Enter valid value!');
    return false;
  }

  for (var _i = 1; _i <= num; _i++) {
    if (num % _i === 0) {
      result += _i + ', ';
    }
  }

  alert("Your result ".concat(result));
}

function TaskSeven() {
  var discount;
  var sum;
  var prise = parseInt(prompt('Enter your prise'));

  if (prise >= 200 && prise < 300) {
    discount = prise * 3 / 100;
    alert(discount);
  } else if (prise >= 300 && prise < 500) {
    discount = prise * 5 / 100;
    alert(discount);
  } else if (prise >= 500) {
    discount = prise * 7 / 100;
    alert(discount);
  }
}

function TaskNine() {
  debugger;
  var days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота', 'Неділя'];
  var Day = 0;

  while (confirm("".concat(days[Day], ". \u0425\u043E\u0447\u0435\u0448 \u043F\u043E\u0431\u0430\u0447\u0438\u0442\u0438 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0434\u0435\u043D\u044C? "))) {
    Day = (Day + 1) % days.length;
  }
}

function TaskTen() {
  var from = 0;
  var to = 100;
  var middle = 50;
  var answer = '';
  var steps = 0;

  do {
    steps++;
    middle = (from + to) / 2;
    answer = prompt("Bigger,smaller or equal ".concat(middle));

    if (answer === '>') {
      from = middle;
    }

    if (answer === '<') {
      to = middle;
    }
  } while (answer !== '=');

  alert('Your number is: ' + middle + ', steps: ' + steps);
} //Таблиця множення


function TaskEleven() {
  for (i = 1; i <= 9; i = i + 1) {
    for (d = 1; d <= 10; d = d + 1) {
      number = i * d;
    }
  }
}

function TaskTwelve() {
  var day = parseInt(prompt('Enter day'));
  var mounth = parseInt(prompt('Enter mounth'));
  var year = parseInt(prompt('Enter year')); //10.02.2019 => 11.02.2019
  //31.12.2019 => 01.01.2020
  //28.02.2020 => 29.02.2020
  //28.02.2021 => 01.03.2021

  var newDay = +day + 1;
  var newMounth = mounth;
  var newYear = year;

  switch (mounth) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (newDay == 32) {
        newDay = 1;
        newMounth++;
      }

      break;

    case 4:
    case 6:
    case 9:
    case 11:
      if (newDay == 31) {
        newDay = 1;
        newMounth++;
      }

    case 2:
      if (year % 4 === 0 && year % 100 !== 0 || year % 400 !== 0) {
        if (newDay == 30) {
          newDay = 1;
          newMounth++;
        } else if (newDay == 29) {
          newDay = 1;
          newMounth++;
        }
      }

      break;
  }

  if (newMounth == 13) {
    newMounth = 1;
    newYear++;
  }

  var addZero = function addZero(num) {
    return num < 10 ? '0' + num : '' + num;
  };

  alert("next date: ".concat(addZero(newDay), ".").concat(addZero(newMounth), ".").concat(addZero(newYear)));
}