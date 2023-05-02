//정삼각형
function triangle3(num){
	for(let i=0;i<num;i++){
		let row="";
		for(let j=num-1;j>i;j--){
			row+=" ";
		}
		for(let j=0;j<2*i+1;j++){
			row+="*";		
		}
		console.log(row);
	}
}
