const plus = document.getElementById('plus');
const one = document.getElementById('one');
const two = document.getElementById('two');
const equal = document.getElementById('equal');
const results = document.getElementById('results');

const zero = document.getElementById('zero');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');

const minus = document.getElementById('minus');
const divide = document.getElementById('divide');
const multiple = document.getElementById('multiple');

let result;
let operator = "";
let number1 = "";
let number2 = "";
let num1;
let num2; 
let num3;
let num4;

function totalCal() {
    one.addEventListener('click', function() {
    number2 += "1";
    num2 = parseFloat(number2);
    console.log(num2);
    console.log(typeof num2);
})


two.addEventListener('click', function() {
    number2 += "2";
    num2 = parseFloat(number2);
    console.log(num2);
    console.log(typeof num2);
})

three.addEventListener('click', function() {
    number2 += "3";
    num2 = parseFloat(number2);
    console.log(num2);
    console.log(typeof num2);
})

four.addEventListener('click', function() {
    number2 += "4";
    num2 = parseFloat(number2);
    console.log(num2);
    console.log(typeof num2);
})

five.addEventListener('click', function() {
    number2 += "5";
    num2 = parseFloat(number2);
    console.log(num2);
    console.log(typeof num2);
})

six.addEventListener('click', function() {
    number2 += "6";
    num2 = parseFloat(number2);
    console.log(num2);
    console.log(typeof num2);
})

seven.addEventListener('click', function() {
    number2 += "7";
    num2 = parseFloat(number2);
    console.log(num2);
    console.log(typeof num2);
})

eight.addEventListener('click', function() {
    number2 += "8";
    num2 = parseFloat(number2);
    console.log(num2);
    console.log(typeof num2);
})

nine.addEventListener('click', function() {
    number2 += "9";
    num2 = parseFloat(number2);
    console.log(num2);
    console.log(typeof num2);
})

zero.addEventListener('click', function() {
    number2 += "0";
    num2 = parseFloat(number2);
    console.log(num2);
    console.log(typeof num2);
})

}

minus.addEventListener('click', function() {
    num3 = parseFloat(num1)
    operator += "-";
    totalCal();
})

divide.addEventListener('click', function() {
    num3 = parseFloat(num1)
    operator += "/";
    totalCal();
})

multiple.addEventListener('click', function() {
    num3 = parseFloat(num1)
    operator += "*";
    totalCal();
})

plus.addEventListener('click', function() {
    num3 = parseFloat(num1)
    operator += "+";
    totalCal();
})

// ------------------------

one.addEventListener('click', function() {
    number1 += "1";
    num1 = parseFloat(number1);
    console.log(num1);
    console.log(typeof num1);
})



two.addEventListener('click', function() {
    number1 += "2";
    num1 = parseFloat(number1);
    console.log(num1);
    console.log(typeof num1);
})

three.addEventListener('click', function() {
    number1 += "3";
    num1 = parseFloat(number1);
    console.log(num1);
    console.log(typeof num1);
})

four.addEventListener('click', function() {
    number1 += "4";
    num1 = parseFloat(number1);
    console.log(num1);
    console.log(typeof num1);
})

five.addEventListener('click', function() {
    number1 += "5";
    num1 = parseFloat(number1);
    console.log(num1);
    console.log(typeof num1);
})

six.addEventListener('click', function() {
    number1 += "6";
    num1 = parseFloat(number1);
    console.log(num1);
    console.log(typeof num1);
})

seven.addEventListener('click', function() {
    number1 += "7";
    num1 = parseFloat(number1);
    console.log(num1);
    console.log(typeof num1);
})

eight.addEventListener('click', function() {
    number1 += "8";
    num1 = parseFloat(number1);
    console.log(num1);
    console.log(typeof num1);
})

nine.addEventListener('click', function() {
    number1 += "9";
    num1 = parseFloat(number1);
    console.log(num1);
    console.log(typeof num1);
})

zero.addEventListener('click', function() {
    number1 += "0";
    num1 = parseFloat(number1);
    console.log(num1);
    console.log(typeof num1);
})





// using if...else if... else



equal.addEventListener('click', function() {
    if (operator == '+') {
    result = num3 + num2;
}
else if (operator == '-') {
    result = num3 - num2;
}
else if (operator == '*') {
    result = num3 * num2;
}
else {
    result = num3 / num2;
}


    results.innerHTML = `${num3} ${operator} ${num2} = ${result}`;
    console.log(typeof result);
    console.log(result);

})

// display the result
console.log(`${num3} ${operator} ${num2} = ${result}`);
