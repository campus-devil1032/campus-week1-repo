const height = 10


for(let i=height; i>=1; i--){
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

// *******************
//  *****************
//   ***************
//    *************
//     ***********
//      *********
//       *******
//        *****
//         ***
//          *