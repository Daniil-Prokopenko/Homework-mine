
function Task(){

    const a = 0.1;
    const b = 0.2;

    let result = 0;

    result = (a + b);

    alert(result.toFixed(1));
}

function Task_one(){
    const age = parseInt(prompt('Enter your age'));
    if(age >= 0 && age < 12){
        alert('You are children!');
    } else if(age >= 12 && age < 18){
        alert('You are teenager!');
    } else if (age >= 18 && age < 59){
        alert('You are adult!');
    } else if(age >= 59){
        alert('You are pensioner');
    } else{
        alert('Enter valid age!');
    }
}

function Task_two(){
    let v =  parseInt(prompt('Enter your number'));
    if(v === 1){
        alert('!');
    } else if(v === 2){
        alert('@');
    } else if(v === 3){
        alert('#');
    }else if(v === 4){
        alert('$');
    }else if(v === 5){
        alert('%');
    }else if(v === 6){
        alert('^');
    }else if(v === 7){
        alert('&');
    }else if(v === 8){
        alert('*');
    }else if(v === 9){
        alert('(');
    } else{
        alert('Enter valid value!');
    }
}

function TaskThree(){
    let i = parseInt(prompt('Eenter the beginning of the range',''));
    let b = parseInt(prompt('Enter the end of the range',''));
    let sum = 0;
 
    while(i <= b){       
        sum+=i;  
        i++;
        }
    
    alert(sum)
}

function TaskFour(){
    let a = parseInt(prompt('Enter first number'));
    let b = parseInt(prompt('Enter second number'));
    let c;
    while (a!=b) {
        if (a>b) {
            a = a - b;
        }
        else {
            b = b - a;
        }
    }
    c = a;
    alert(c);
}

function TaskFive(){
     const num = parseInt(prompt('Enter your number'));
     let result ='';

     if(isNaN(num)){
        alert('Enter valid value!');
        return false;
     }

     for(let i = 1; i <= num; i++){
         if(num % i === 0){
            result += i + ', '; 
         }
     }

     alert(`Your result ${result}`);
}

function TaskSeven(){
    let discount;
    let sum;
    let prise = parseInt(prompt('Enter your prise'));
    if(prise >= 200 && prise < 300){
        discount = (prise * 3) / 100;
        alert(discount);
    } else if(prise >= 300 && prise < 500){
        discount = (prise * 5) / 100;
        alert(discount);
    } else if(prise >= 500){
        discount = (prise * 7) / 100;
        alert(discount);
    }
}

function TaskNine(){
    debugger;
        const days = ['Понеділок','Вівторок','Середа','Четвер',"П'ятниця",'Субота','Неділя'];
        let Day = 0;
        while (confirm(`${days[Day]}. Хочеш побачити наступний день? `)) {
        Day = (Day + 1) % days.length;
    } 
}


function TaskTen(){
    let from = 0;
    let to = 100;
    let middle = 50;
    let answer = '';
    let steps = 0;

    do {
        steps++;
        middle = (from + to) / 2;
        answer = prompt(`Bigger,smaller or equal ${middle}`);
        if(answer === '>'){
            from = middle;
        }
        if(answer === '<'){
            to = middle;
        }
    } while(answer !== '=')
    alert('Your number is: ' +middle+', steps: ' +steps);
}

function TaskEleven(){
    for(i = 1; i <= 9; i = i + 1){
        for(d = 1; d <= 10; d = d+ 1){
            number = i * d;
        }
    }
}

function TaskTwelve(){
    let day = parseInt(prompt('Enter day'));
    let mounth = parseInt(prompt('Enter mounth'));
    let year = parseInt(prompt('Enter year'));
    //10.02.2019 => 11.02.2019
    //31.12.2019 => 01.01.2020
    //28.02.2020 => 29.02.2020
    //28.02.2021 => 01.03.2021

    let newDay = +day + 1;
    let newMounth = mounth;
    let newYear = year;
    switch(mounth){
        case 1:
            case 3:
                case 5:
                    case 7:
                        case 8:
                            case 10:
                                case 12:
        if(newDay == 32){
            newDay = 1;
            newMounth++;
        }
        break;
        case 4:
            case 6:
                case 9:
                    case 11:
        if(newDay == 31){
            newDay = 1;
            newMounth++;
         }
        case 2:
        if((year % 4 === 0 && year % 100 !== 0) || (year % 400 !== 0)){
            if(newDay == 30){
                newDay = 1;
                newMounth++;
            } else if(newDay == 29){
                newDay = 1;
                newMounth++;
            }
        }
        break;

    }
    if(newMounth == 13){
        newMounth = 1;
        newYear++;
    }
    const addZero = num => num < 10 ? '0' + num : '' + num;
    alert(`next date: ${addZero(newDay)}.${addZero(newMounth)}.${addZero(newYear)}`);

}

