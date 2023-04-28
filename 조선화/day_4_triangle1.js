//직각삼각형
function triangle1(num){	
    for(let i=1;i<=num;i++){
        let row="";
		for(let j=0;j<i;j++){
			row+="*";
		}
        console.log(row);
	}
}