
const zero = document.getElementById('0');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');

const sum = document.getElementById('sum');
const sub = document.getElementById('sub');
const div = document.getElementById('div');
const mul= document.getElementById('mul');
const eq = document.getElementById('eq');
const result = document.getElementById('result');

let res;
let operator = '';
let tmpString = '';
let num1;
let num2; 
let displayValue = '';

function addClickEventListener(element, number) {
    element.addEventListener('click', function() {
        if (operator === '') {
          tmpString += number;
            num1 = parseFloat(tmpString);
            console.log(num1);
            console.log(typeof num1);
            
        } else {
          tmpString += number;
            num2 = parseFloat(tmpString);
            console.log(num2);
            console.log(typeof num2);
        }
        tmpString = '';
    });
}

addClickEventListener(one, '1');
addClickEventListener(two, '2');
addClickEventListener(three, '3');
addClickEventListener(four, '4');
addClickEventListener(five, '5');
addClickEventListener(six, '6');
addClickEventListener(seven, '7');
addClickEventListener(eight, '8');
addClickEventListener(nine, '9');
addClickEventListener(zero, '0');

sub.addEventListener('click', function() {
  operator += "-";
})

div.addEventListener('click', function() {
  operator += "/";
})

mul.addEventListener('click', function() {
  operator += "*";
})

sum.addEventListener('click', function() {
  operator += "+";
})

eq.addEventListener('click', function() {
  switch(operator) {
    case '+':
      res = num1 + num2;
      break;
    case '-':
      res = num1 - num2;
      break;
    case '*':
      res = num1 * num2;
      break;
    case '/':
      res = num1 / num2;
    break;
    default:
      res = ``;
      
  }
    
    document.querySelector('.display').value = res
    
})

function input(value) {
  displayValue += value;
  document.querySelector('.display').value = displayValue
  }
