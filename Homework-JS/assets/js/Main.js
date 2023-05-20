let username = prompt('Enter your name');

let str = `Hello, ${username}`;

alert(str);

const Year  = new Date().getFullYear();

const PI = Math.PI;

//let User_data = {};

/*let message = 'Привіт!';

let user = 'Петров';

var age = 73;*/

function CalculateYear(){
    const number  = parseInt(prompt('Enter your year of birth'));

    let result = 0;

    if(number){
        result = Year - number;
        alert(`Result = ${result} y.`);
    }
}

function SquarePerimeter(){
    const number  = parseInt(prompt('Enter the length of the side of the square'));

    let result = 0;

    if(number){
        result = number * 4;
        alert(`Square perimeter - ${result}`);
    }
}

function CircleArea(){
        const number  = parseInt(prompt('Enter the radius of the circle'));

        let result = 0;

        if(number){
            result = (PI * Math.pow(number, 2)).toFixed(2);
            alert(`Circle area - ${result}`);
    }
}

function Pathway(){
    const distance = parseInt(prompt('Enter the distance between the buildings'));
    const time  = parseInt(prompt('Enter the time it will take you to complete the way'));

    let result = 0;

    if(distance){
        result = distance / time;
        alert(`Your speed is ${result} km/h`);
}
}

function Currency(){
    const number = parseInt(prompt('Enter dollars'));
    const euro  = 0.92;

    let result = 0;

    if(number){
        result = number * euro;
        alert(`in ${number} $ - ${result} €`);
}
}
