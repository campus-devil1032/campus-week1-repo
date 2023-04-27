var tri1 = 10;
var result1 = "";

for (var i = 1; i < tri1 * 2; i += 2) {
    for (var j = 1; j < ((tri1 * 2) - i) / 2; j++) {
        result1 += " ";
    }
    for (var l = 1; l <= i; l++) {
        result1 += "*";
    }
    for (var k = 1; k < ((tri1 * 2) - i) / 2; k++) {
        result1 += " ";
    }
    result1 += "\n";
}
console.log(result1);


var tri2 = 10;
var result2 = "";

for (var i = (tri2*2) - 1 ; i >= 1; i -= 2) {
  for (var j = 1; j < ((tri2 * 2) - i) / 2; j++) {
    result2 += " ";
  }
  for (var l = i; l >= 1; l--) {
    result2 += "*";
  }
  for (var k = 1; k < ((tri2 * 2) - i) / 2; k++) {
    result2 += " ";
  }
  result2 += "\n";
}
console.log(result2);




let result3 = '';

for(let i = 0; i < 5; i++) {
  for(let b = 0; b < (5 - i); b++) {
    result3 += ' ';
  }
  for(let j = 0; j < (2 * i + 1); j++) {
    result3 += '*';
  }
  result3 +='\n';
}

for(let i = 0; i < 6; i++) {
  for(let b = 0; b < i; b++) {
    result3 += ' ';
  }
  for(let j = 0; j < (2 * (5 - i) + 1); j++) {
    result3 += '*';
  }
  result3 += '\n';
}