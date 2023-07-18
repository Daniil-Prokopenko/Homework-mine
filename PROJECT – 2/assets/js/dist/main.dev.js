"use strict";

//saidbar
function toggleMenu() {
  document.getElementById('hamb-btn').classList.toggle('is-active');
  document.getElementById('main-sidebar').classList.toggle('open');
} //color-header


window.addEventListener('scroll', function () {
  if (window.scrollY > document.getElementById("scrol").offsetHeight) {
    document.getElementById("header").classList.add("color");
  } else {
    document.getElementById("header").classList.remove("color");
  }
}); //slider

$('.single-item').slick({
  arrows: false,
  dots: true,
  autoplay: true
});
$('.slick').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  variableWidth: true,
  responsive: [{
    breakpoint: 769,
    settings: {
      arrows: false
    }
  }]
}); //News

function getNews() {
  fetch('assets/data/news.json').then(function (resp) {
    return resp.json();
  }).then(function (resp) {
    console.log(resp);
    var card = '';
    resp.forEach(function (item) {
      card += "<div class = \"news_item\">\n                <img class =\"news_image\" src=\"".concat(item.image, "\">\n                <h3 class =\"news_title Montserrat\">").concat(item.title, "</h3>\n                <div class =\"news_text OpenSans\">").concat(item.text, "</div>\n                <div class =\"news_flex\">\n                <img class = \"news_img\" src=\"").concat(item.img, "\">\n                <div>\n                <div class = \"news_name Montserrat\" >").concat(item.name, "</div>\n                <div class = \"news_date Montserrat\" >").concat(item.date, "</div>\n                </div>\n                </div>\n                </div>");
    });
    document.getElementById("card").innerHTML = card;
  });
}

getNews();

function getNewsTwo() {
  fetch('assets/data/news_two.json').then(function (resp) {
    return resp.json();
  }).then(function (resp) {
    console.log(resp);
    var card = '';
    resp.forEach(function (item) {
      card += "<div class = \"news_item\">\n                <img class =\"news_image\" src=\"".concat(item.image, "\">\n                <h3 class =\"news_title Montserrat\">").concat(item.title, "</h3>\n                <div class =\"news_text OpenSans\">").concat(item.text, "</div>\n                <div class =\"news_flex\">\n                <img class = \"news_img\" src=\"").concat(item.img, "\">\n                <div>\n                <div class = \"news_name Montserrat\" >").concat(item.name, "</div>\n                <div class = \"news_date Montserrat\" >").concat(item.date, "</div>\n                </div>\n                </div>\n                </div>");
    });
    document.getElementById("card_two").innerHTML = card;
  });
}

getNewsTwo();

function getNewsThree() {
  fetch('assets/data/news_three.json').then(function (resp) {
    return resp.json();
  }).then(function (resp) {
    console.log(resp);
    var card = '';
    resp.forEach(function (item) {
      card += "<div class = \"news_item\">\n                <img class =\"news_image\" src=\"".concat(item.image, "\">\n                <h3 class =\"news_title Montserrat\">").concat(item.title, "</h3>\n                <div class =\"news_text OpenSans\">").concat(item.text, "</div>\n                <div class =\"news_flex\">\n                <img class = \"news_img\" src=\"").concat(item.img, "\">\n                <div>\n                <div class = \"news_name Montserrat\" >").concat(item.name, "</div>\n                <div class = \"news_date Montserrat\" >").concat(item.date, "</div>\n                </div>\n                </div>\n                </div>");
    });
    document.getElementById("card_three").innerHTML = card;
  });
}

getNewsThree();

function getNewsFour() {
  fetch('assets/data/news_four.json').then(function (resp) {
    return resp.json();
  }).then(function (resp) {
    console.log(resp);
    var card = '';
    resp.forEach(function (item) {
      card += "<div class = \"news_item\">\n                <img class =\"news_image\" src=\"".concat(item.image, "\">\n                <h3 class =\"news_title Montserrat\">").concat(item.title, "</h3>\n                <div class =\"news_text OpenSans\">").concat(item.text, "</div>\n                <div class =\"news_flex\">\n                <img class = \"news_img\" src=\"").concat(item.img, "\">\n                <div>\n                <div class = \"news_name Montserrat\" >").concat(item.name, "</div>\n                <div class = \"news_date Montserrat\" >").concat(item.date, "</div>\n                </div>\n                </div>\n                </div>");
    });
    document.getElementById("card_four").innerHTML = card;
  });
}

getNewsFour();

function getNewsFive() {
  fetch('assets/data/news_five.json').then(function (resp) {
    return resp.json();
  }).then(function (resp) {
    console.log(resp);
    var card = '';
    resp.forEach(function (item) {
      card += "<div class = \"news_item\">\n                <img class =\"news_image\" src=\"".concat(item.image, "\">\n                <h3 class =\"news_title Montserrat\">").concat(item.title, "</h3>\n                <div class =\"news_text OpenSans\">").concat(item.text, "</div>\n                <div class =\"news_flex\">\n                <img class = \"news_img\" src=\"").concat(item.img, "\">\n                <div>\n                <div class = \"news_name Montserrat\" >").concat(item.name, "</div>\n                <div class = \"news_date Montserrat\" >").concat(item.date, "</div>\n                </div>\n                </div>\n                </div>");
    });
    document.getElementById("card_five").innerHTML = card;
  });
}

getNewsFive();

function getNewsSix() {
  fetch('assets/data/news_six.json').then(function (resp) {
    return resp.json();
  }).then(function (resp) {
    console.log(resp);
    var card = '';
    resp.forEach(function (item) {
      card += "<div class = \"news_item\">\n                <img class =\"news_image\" src=\"".concat(item.image, "\">\n                <h3 class =\"news_title Montserrat\">").concat(item.title, "</h3>\n                <div class =\"news_text OpenSans\">").concat(item.text, "</div>\n                <div class =\"news_flex\">\n                <img class = \"news_img\" src=\"").concat(item.img, "\">\n                <div>\n                <div class = \"news_name Montserrat\" >").concat(item.name, "</div>\n                <div class = \"news_date Montserrat\" >").concat(item.date, "</div>\n                </div>\n                </div>\n                </div>");
    });
    document.getElementById("card_six").innerHTML = card;
  });
}

getNewsSix(); //Gallery

lightGallery(document.getElementById('lightgallery'), {
  plugins: [lgZoom],
  licenseKey: '',
  speed: 500
});
$(function () {
  $(".magnifier").css("opacity", "0");
  $(".magnifier").hover(function () {
    $(this).stop().animate({
      opacity: .6
    }, "slow");
  }, function () {
    $(this).stop().animate({
      opacity: 0
    }, "slow");
  });
}); //Map

var map = L.map('map').setView([40.67981756043577, -73.93879753779667], 13);
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png	', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
}).addTo(map);
L.marker([40.67981756043577, -73.93879753779667]).addTo(map).openPopup();
var greenIcon = L.icon({
  iconUrl: 'assets/plugins/map/images/leaf-green.png',
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
}); // bot

window.contacts.addEventListener('submit', function (event) {
  event.preventDefault();
  var errors = [];
  var msg = '',
      name = window.username.value,
      email = window.email.value,
      number = window.tel.value;

  if (name === '') {
    errors.push('Enter your name');
  }

  if (email === '') {
    errors.push('Enter your email');
  }

  if (number === '') {
    errors.push('Enter your telefon number');
  }

  if (errors.length === 0) {
    msg = "\n        <b>Name: </b> ".concat(name, "\n        <b>Email: </b> ").concat(email, "\n        <b>Tel: </b> ").concat(number);
    sendMessage(msg);
    console.log('!!!!!!!!!!!');
  } else {
    alert(errors.join(' '));
  }
});

function sendMessage(message) {
  var apiToken, chatId, urlString, response, resp;
  return regeneratorRuntime.async(function sendMessage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          apiToken = "6390773856:AAGzrGoXvkHxDLN0edkmfg1nUfdxLbSzg50";
          chatId = "-1001670143368";
          urlString = "https://api.telegram.org/bot".concat(apiToken, "/sendMessage?chat_id=").concat(chatId, "&text=").concat(message, "&parse_mode=HTML");
          _context.next = 5;
          return regeneratorRuntime.awrap(fetch("https://api.telegram.org/bot".concat(apiToken, "/sendMessage"), {
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              chat_id: chatId,
              text: message,
              parse_mode: 'HTML'
            })
          }));

        case 5:
          response = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap(response.json());

        case 8:
          resp = _context.sent;
          console.log(resp);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
}

$("#tel").mask('+38 (099) 999 99 99');