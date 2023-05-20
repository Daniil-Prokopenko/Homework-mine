"use strict";

var username = prompt('Enter your name');
var str = "Hello, ".concat(username);
alert(str);
var Year = new Date().getFullYear();
var PI = Math.PI; //let User_data = {};

/*let message = 'Привіт!';

let user = 'Петров';

var age = 73;*/

function CalculateYear() {
  var number = parseInt(prompt('Enter your year of birth'));
  var result = 0;

  if (number) {
    result = Year - number;
    alert("Result = ".concat(result, " y."));
  }
}

function SquarePerimeter() {
  var number = parseInt(prompt('Enter the length of the side of the square'));
  var result = 0;

  if (number) {
    result = number * 4;
    alert("Square perimeter - ".concat(result));
  }
}

function CircleArea() {
  var number = parseInt(prompt('Enter the radius of the circle'));
  var result = 0;

  if (number) {
    result = (PI * Math.pow(number, 2)).toFixed(2);
    alert("Circle area - ".concat(result));
  }
}

function Pathway() {
  var distance = parseInt(prompt('Enter the distance between the buildings'));
  var time = parseInt(prompt('Enter the time it will take you to complete the way'));
  var result = 0;

  if (distance) {
    result = distance / time;
    alert("Your speed is ".concat(result, " km/h"));
  }
}

function Currency() {
  var number = parseInt(prompt('Enter dollars'));
  var euro = 0.92;
  var result = 0;

  if (number) {
    result = number * euro;
    alert("in ".concat(number, " $ - ").concat(result, " \u20AC"));
  }
}