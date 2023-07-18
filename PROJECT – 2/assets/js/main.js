//saidbar
function toggleMenu(){
    document .getElementById('hamb-btn').classList.toggle('is-active');
    document .getElementById('main-sidebar').classList.toggle('open');
}
//color-header
window.addEventListener('scroll', function(){
    if(window.scrollY > document.getElementById("scrol").offsetHeight){
        document.getElementById("header").classList.add("color");
    }else {
        document.getElementById("header").classList.remove("color");
    }
})

//slider
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
            arrows : false
        }
    }, ]
});



//News
function getNews()    {
    fetch('assets/data/news.json')
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp);
            let card = '';
            resp.forEach(item => {
                card += `<div class = "news_item">
                <img class ="news_image" src="${item.image}">
                <h3 class ="news_title Montserrat">${item.title}</h3>
                <div class ="news_text OpenSans">${item.text}</div>
                <div class ="news_flex">
                <img class = "news_img" src="${item.img}">
                <div>
                <div class = "news_name Montserrat" >${item.name}</div>
                <div class = "news_date Montserrat" >${item.date}</div>
                </div>
                </div>
                </div>`;
            });
            document.getElementById("card").innerHTML=card;

        })
}
getNews();

function getNewsTwo()    {
    fetch('assets/data/news_two.json')
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp);
            let card = '';
            resp.forEach(item => {
                card += `<div class = "news_item">
                <img class ="news_image" src="${item.image}">
                <h3 class ="news_title Montserrat">${item.title}</h3>
                <div class ="news_text OpenSans">${item.text}</div>
                <div class ="news_flex">
                <img class = "news_img" src="${item.img}">
                <div>
                <div class = "news_name Montserrat" >${item.name}</div>
                <div class = "news_date Montserrat" >${item.date}</div>
                </div>
                </div>
                </div>`;
            });
            document.getElementById("card_two").innerHTML=card;

        })
}
getNewsTwo();

function getNewsThree()    {
    fetch('assets/data/news_three.json')
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp);
            let card = '';
            resp.forEach(item => {
                card += `<div class = "news_item">
                <img class ="news_image" src="${item.image}">
                <h3 class ="news_title Montserrat">${item.title}</h3>
                <div class ="news_text OpenSans">${item.text}</div>
                <div class ="news_flex">
                <img class = "news_img" src="${item.img}">
                <div>
                <div class = "news_name Montserrat" >${item.name}</div>
                <div class = "news_date Montserrat" >${item.date}</div>
                </div>
                </div>
                </div>`;
            });
            document.getElementById("card_three").innerHTML=card;

        })
}
getNewsThree();

function getNewsFour()    {
    fetch('assets/data/news_four.json')
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp);
            let card = '';
            resp.forEach(item => {
                card += `<div class = "news_item">
                <img class ="news_image" src="${item.image}">
                <h3 class ="news_title Montserrat">${item.title}</h3>
                <div class ="news_text OpenSans">${item.text}</div>
                <div class ="news_flex">
                <img class = "news_img" src="${item.img}">
                <div>
                <div class = "news_name Montserrat" >${item.name}</div>
                <div class = "news_date Montserrat" >${item.date}</div>
                </div>
                </div>
                </div>`;
            });
            document.getElementById("card_four").innerHTML=card;

        })
}
getNewsFour();

function getNewsFive()    {
    fetch('assets/data/news_five.json')
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp);
            let card = '';
            resp.forEach(item => {
                card += `<div class = "news_item">
                <img class ="news_image" src="${item.image}">
                <h3 class ="news_title Montserrat">${item.title}</h3>
                <div class ="news_text OpenSans">${item.text}</div>
                <div class ="news_flex">
                <img class = "news_img" src="${item.img}">
                <div>
                <div class = "news_name Montserrat" >${item.name}</div>
                <div class = "news_date Montserrat" >${item.date}</div>
                </div>
                </div>
                </div>`;
            });
            document.getElementById("card_five").innerHTML=card;

        })
}
getNewsFive();

function getNewsSix()    {
    fetch('assets/data/news_six.json')
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp);
            let card = '';
            resp.forEach(item => {
                card += `<div class = "news_item">
                <img class ="news_image" src="${item.image}">
                <h3 class ="news_title Montserrat">${item.title}</h3>
                <div class ="news_text OpenSans">${item.text}</div>
                <div class ="news_flex">
                <img class = "news_img" src="${item.img}">
                <div>
                <div class = "news_name Montserrat" >${item.name}</div>
                <div class = "news_date Montserrat" >${item.date}</div>
                </div>
                </div>
                </div>`;
            });
            document.getElementById("card_six").innerHTML=card;

        })
}
getNewsSix();

//Gallery
lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgZoom],
    licenseKey: '',
    speed: 500,
});

$(function() {
    $(".magnifier").css("opacity","0");  
    $(".magnifier").hover(function () {
    $(this).stop().animate({
    opacity: .6
    }, "slow");
    },
       
    function () {
    $(this).stop().animate({
    opacity: 0
    }, "slow");
    });
});



//Map
const map = L.map('map').setView([40.67981756043577, -73.93879753779667], 13);

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png	', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
}).addTo(map);

L.marker([40.67981756043577, -73.93879753779667]).addTo(map)
    .openPopup();


    const greenIcon = L.icon({
        iconUrl: 'assets/plugins/map/images/leaf-green.png',
    
        iconSize:     [38, 95],
        iconAnchor:   [22, 94],
        popupAnchor:  [-3, -76]
    });
    

// bot
window.contacts.addEventListener('submit', function(event){
    event.preventDefault();

    const errors = [];

    let msg = '',
    name = window.username.value,
    email = window.email.value,
    number = window.tel.value;
    if(name === ''){
        errors.push('Enter your name');
    }

    if(email === ''){
        errors.push('Enter your email');
    }

    if(number === ''){
        errors.push('Enter your telefon number');
    }

    if(errors.length === 0){
        msg = `
        <b>Name: </b> ${name}
        <b>Email: </b> ${email}
        <b>Tel: </b> ${number}`

         sendMessage(msg);
         console.log('!!!!!!!!!!!');
    }   else {  
        alert(errors.join(' '));
    }

})

async function sendMessage(message)  {
    const apiToken = "6390773856:AAGzrGoXvkHxDLN0edkmfg1nUfdxLbSzg50";
    const chatId = "-1001670143368";
    let urlString = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${message}&parse_mode=HTML`;

    const response = await fetch(`https://api.telegram.org/bot${apiToken}/sendMessage`, {
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
      });
      const resp = await response.json();
      console.log(resp);
    
}

$("#tel").mask('+38 (099) 999 99 99');
