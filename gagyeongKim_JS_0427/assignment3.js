const height = 5

for(let i=1; i<=height; i++){
    let line = '';
    for(let j=0; j<5-i; j++){
        line += ' ';
      }

    for(let j=0; j<i*2-1; j++){
      line += '*';
    }
    console.log(line);
  }

for(let i=5; i>=1; i--){
    let line = '';
    for(let j=0; j<height-i; j++){
        line += ' ';
      }

    for(let j=0; j<i*2-1; j++){
      line += '*';
    }
    console.log(line);
  }

/*
result
*/

//     *
//    ***
//   *****
//  *******
// *********
// *********
//  *******
//   *****
//    ***
//     *