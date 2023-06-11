
function Task_one(){

    const a = 0.1;
    const b = 0.2;

    let result = 0;

    result = (a + b);

    alert(result.toFixed(1));
}

function Task_two(){
    const c = "1";
    const d = 2;

    let result = (+c + d);

    alert(result);
}

function Task_trhee(){
    const GB = parseInt(prompt('How many GB  on your USB?'));

    const one_GB = 1024,
        MB = 820;

    let result = 0;

    if(GB){
        result = (GB * one_GB) / MB;
        alert(`Files will fit on your USB - ${Math.round(result)}`);
    }

}

function Task_four(){
    const money = parseInt(prompt('Enter your amount of money'));
    const cost = parseInt(prompt('What is the price of a chocolate bar?'));

    let bars = 0,
        rest = 0;

    if(money){
        bars = Math.trunc(money/cost);
        alert(`You can buy ${bars} chocolate bar`)
    }

    if(cost){
        rest = money - (bars * cost);
        alert(`Your rest - ${rest}₴`);
    }
}

function Task_five(){
     let numb = prompt('Enter three digit number');

    if(100 <= numb && numb <= 999){
        let result = 0;
        while (numb) {
        result = result * 10 + numb % 10;
        numb = Math.floor(numb / 10);
        }
        alert(result);   
     }    
}

function Task_six(){
    const amount = prompt('Enter the amount of your deposit');

    const deposit = 5;
    const  day = 62;
    let   rate = 0;

    let result = 0;

    if(amount){
        rate = ( deposit / 365).toFixed(4);
        result = (amount * day * rate / 100).toFixed(2);
        alert(`Your  amount of accrued interest - ${result}`);
    }
}

// 2 && 0 && 3
//0

// 2 || 0 || 3
//2

//2 && 0 || 3
//3

