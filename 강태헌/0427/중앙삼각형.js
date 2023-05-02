let row = "";  
  
for (let i = 1; i <= 10; i++) {  
 for (let k = 10; k >i; k--) {  
 row += " ";  
 }  
 for (let j = 1; j<(i*2); j++) {  
  
 row += "*";  
 }  
 row+="\n";  
}  
  
console.log(row);  