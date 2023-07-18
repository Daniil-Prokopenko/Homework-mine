"use strict";

var auto = {
  MacLaren: {
    manufacturer: 'McLaren',
    model: 'P1',
    year: 2013,
    avSpeed: 179,
    fEngine: 200,
    fConsumption: 8
  },
  //Завдання 2
  Travel: function Travel(distance) {
    var hours = distance / this.avSpeed;

    if (hours % 4 === 0) {
      return hours + Math.floor((hours - 1) / 4);
    }

    return hours + Math.floor(hours / 4);
  }
};
console.log(auto); //Завдання 1

var show = '<ul>';

for (var key in auto.MacLaren) {
  if (auto.MacLaren[key]) show += "<li><b>".concat(key, " : </b>").concat(auto.MacLaren[key], "</li>");
}

show += '</ul>';
document.body.innerHTML = show;