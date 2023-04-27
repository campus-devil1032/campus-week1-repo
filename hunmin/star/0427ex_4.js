const height = 10

for(let i = height; i >= 1; i--){
  let star = " ";

  for(let j = 0; j < height-i; j++){
    star += " ";
  }

  for(let j = 0; j < i*2-1; j++){
    star += "*";
  }

  console.log(star);
  /*역삼각형*/
}
