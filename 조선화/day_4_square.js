//사각형
function square(num){	
    for(let i=0;i<num;i++){
      let row="";
		let j=0;		
		while(j<10){
			row+="*";
			j++;
		}		
       console.log(row);
	}
}