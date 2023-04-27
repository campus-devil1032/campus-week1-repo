// 정삼각형 만들기

let height = 5;

for (let i = 0; i < height; i++) {
  let row = '';
  // 왼쪽 공백 만들기
  for (let j = 0; j < height - i - 1; j++) {
    row += ' ';
  }
  // 별 찍기
  for (let k = 0; k < 2 * i + 1; k++) {
    row += '*';
  }
  console.log(row);
}
