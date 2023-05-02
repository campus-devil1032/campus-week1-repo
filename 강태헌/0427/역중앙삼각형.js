let row = "";  
  
for (let i = 0; i <= 10; i++){  
 for(let j = 0; j < i; j++){  
 row += " ";  
 }  
 for(let k = 19; k > i*2; k--){  
 row += "*";  
 }  
 row += "\n";  
}  
  
console.log(row);  