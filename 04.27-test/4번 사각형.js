let num = 10;
let star = '';

for (let i = 0; i < num; i++){ 
  for(let j = 0; j < num; j++) {
    star += '*';
  }
  star += '\n';
}
console.log(star);