//역삼각형
function triangle3(num){
	for(let i=num*2-1;i>=1;i-=2){
		let row="";
		for(let j=1;j<((num*2)-i)/2;j++){
			row+=" ";		
		}
		for(let j= i;j>0;j--){
			row+="*";
		}
		console.log(row);
	}
}