let row = "";  
  
for (let i = 1; i <= 6; i++) {  
 for (let k = 6; k >i; k--) {  
 row += " ";  
 }  
 for (let j = 1; j<(i*2); j++) {  
  
 row += "*";  
 }  
 row += "\n";  
}  
for (let s = 1; s <= 6; s++){  
 for(let x = 0; x <s; x++){  
 row += " ";  
 }  
 for(let q = 11; q > s*2; q--){  
 row += "*";  
 }  
 row += "\n";  
}  
  
console.log(row);  