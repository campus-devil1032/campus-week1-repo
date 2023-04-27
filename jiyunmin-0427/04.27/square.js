// 직사각형

let height = 5; // 직사각형 높이
let width = 10; // 직사각형 너비

// 높이만큼 반복
for (let i = 0; i < height; i++) {
  let row = '';
// 너비만큼 반복
  for (let j = 0; j < width; j++) {
    row += '*'; // "*"을 문자열에 추가
  }
  console.log(row); // 문자열 출력
}
