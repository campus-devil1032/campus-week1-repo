let row = '';

for (let i = 0; i < 10; i++){ 
  for(let j = 0; j < 10; j++) {
    row += '*';
  }
  row += '\n';
}
console.log(row);