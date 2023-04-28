// setTimeout(function() {
//     console.log('5초 후에 실행됩니다.');
//   }, 5000);
  

  document.getElementById('myButton').addEventListener('click', function() {
    console.log('버튼이 클릭되었습니다.');
  });
  

  const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(function(number) {
  return number * number;
});
console.log(squaredNumbers); // [1, 4, 9, 16, 25]
