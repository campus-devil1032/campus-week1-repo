let size = 7;
let diamond = '';


for (let i = 0; i < size; i++) {
  let row = '';
  for (let j = 0; j < size - i; j++) {
    row += ' ';
  }
  for (let k = 0; k < 2 * i + 1; k++) {
    row += '*';
  }
  diamond += row + '\n';
}

for (let i = size - 2; i >= 0; i--) {
  let row = '';
  for (let j = 0; j < size - i; j++) {
    row += ' ';
  }
  for (let k = 0; k < 2 * i + 1; k++) {
    row += '*';
  }
  diamond += row + '\n';
}

console.log(diamond);