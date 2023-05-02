//다이아몬드
function diamond(num){
	//상단
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
	//하단
	for(let i=num*2-1-1;i>=1;i-=2){
		let row="";
		for(let j=0;j<((num*2)-i)/2;j++){
			row+=" ";		
		}
		for(let j= i-1;j>0;j--){
			row+="*";
		}
		console.log(row);
	}
}