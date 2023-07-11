//Завдання 1
//Перший спосіб
console.log(TaskOne_1);
function TaskOne_1(a, b){
    return a + b;
}
//Другий спосіб
const TaskOne_2 = function(a, b){
    return a * b;
}
console.log(TaskOne_2);

//Завдання 2
function TaskTwo(){
    return arguments.length;
}

//Завдання 3
function calcSum(a,b){
    if(a > b){
        return -1;
    } else if(a < b){
        return 1;
    } else if(a = b){
        return 0;
    } 
}

function TaskThree(){
    const numOne = parseInt(document.getElementById('Task_3_1').value);
    const numTwo = parseInt(document.getElementById('Task_3_2').value);

    const result = calcSum(numOne, numTwo);

    document.getElementById('Task_3_result').innerText = `Your number : ${result}`;
}

//Завдання 4
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
  function TaskFour(){
    const n = parseInt(document.getElementById('Task_4').value);

    const result = factorial(n);

    document.getElementById('Task_4_result').innerText = `Your factorial is ${result}`;
  }

//Завдання 6
function TaskSix(w, h = w){
    return h * w;
}

TaskSix(10, 12);
TaskSix(12);

//Завдання 7

function checkPerfectNumber(number) {
    let temp = 0;
       for(let i=1;i<=number/2;i++) {
             if(number%i === 0) {
                temp += i;
              }
         }
      
         if(temp === number && temp !== 0) {
           alert("Досконале число");
            }  
          else {
           alert("Не досконале число");
            }  
}

function TaskSeven(){
    let number = parseInt(prompt('Введіть число на перевірку'));

    const result = checkPerfectNumber(number);

}

//Завдання 8
function getPerfectNumber(a, b) {
    let result = [];
    for (let i = a; i < b; i++) {
      sum = 0;
      for (let n = 1; n <= i/2; n++) {
        if (i % n === 0) sum += n;
      }
      if (i === sum) result.push(i);
    }
    return result;
}

function TaskEight(){
    const numOne = parseInt(document.getElementById('Task_8_1').value);
    const numTwo = parseInt(document.getElementById('Task_8_2').value);

    const result = getPerfectNumber(numOne, numTwo);

    document.getElementById('Task_8_result').innerText = `Perfect number : ${result}`;
}