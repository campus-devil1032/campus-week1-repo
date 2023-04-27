var num = 10;
var star = "";


for(var i=1;i<=num;i++){
  for(var j=1;j<=i;j++){
    star += "*";
  }
  star += "\n";
}

console.log(star);
