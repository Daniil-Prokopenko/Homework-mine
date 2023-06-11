"use strict";

function Task_one() {
  var a = 0.1;
  var b = 0.2;
  var result = 0;
  result = a + b;
  alert(result.toFixed(1));
}

function Task_two() {
  var c = "1";
  var d = 2;
  var result = +c + d;
  alert(result);
}

function Task_trhee() {
  var GB = parseInt(prompt('How many GB  on your USB?'));
  var one_GB = 1024,
      MB = 820;
  var result = 0;

  if (GB) {
    result = GB * one_GB / MB;
    alert("Files will fit on your USB - ".concat(Math.round(result)));
  }
}

function Task_four() {
  var money = parseInt(prompt('Enter your amount of money'));
  var cost = parseInt(prompt('What is the price of a chocolate bar?'));
  var bars = 0,
      rest = 0;

  if (money) {
    bars = Math.trunc(money / cost);
    alert("You can buy ".concat(bars, " chocolate bar"));
  }

  if (cost) {
    rest = money - bars * cost;
    alert("Your rest - ".concat(rest, "\u20B4"));
  }
}

function Task_five() {
  var numb = prompt('Enter three digit number');

  if (100 <= numb && numb <= 999) {
    var result = 0;

    while (numb) {
      result = result * 10 + numb % 10;
      numb = Math.floor(numb / 10);
    }

    alert(result);
  }
}

function Task_six() {
  var amount = prompt('Enter the amount of your deposit');
  var deposit = 5;
  var day = 62;
  var rate = 0;
  var result = 0;

  if (amount) {
    rate = (deposit / 365).toFixed(4);
    result = (amount * day * rate / 100).toFixed(2);
    alert("Your  amount of accrued interest - ".concat(result));
  }
} // 2 && 0 && 3
//0
// 2 || 0 || 3
//2
//2 && 0 || 3
//3