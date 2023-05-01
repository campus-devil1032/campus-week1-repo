class Cal{
    constructor(expression, num){
        this.expression = expression; //수학식 화면
        this.num = num;                //숫자 화면
        this.isOperator =false;        //연산자 체크
        this.isEqual = false;          //등호 체크
        this.basket = '';               //숫자 및 연산자 담는 바구니
    }



    appendNumber(number){
        if(this.isEqual) {         
            this.basket = number;
            this.num.innerHTML = this.basket;}           
        else {
            if(this.operator == true) this.num.innerHTML=''; 
            this.basket+=number;
            this.num.innerHTML+=number;
            //arr배열 생성 후, 한 글자씩 추가    
            let arr = this.num.innerHTML.split('');
            //arr배열에서 ','요소 삭제
            let idx = arr.indexOf(',');
            if(arr.includes(',')){
                while(idx>-1){
                arr.splice(idx, 1);
                idx = arr.indexOf(',');
                }
            }
            //새롭게 ','생성
            for(let j=3; j<arr.length; j=j+4){
                arr.splice((arr.length-j),0,',');
            }
            // innerHTML에 문자열 연결  
            let str = '';
            for(let j=0; j<arr.length; j++){
                str+=arr[j];
            }
            this.num.innerHTML=str;
            this.operator = false;           
        }               
    }

    appendOperator(operator){        
        const isOperator = ['+','-','x','÷'];
        if(isOperator.includes(this.basket[this.basket.length-1]) ||
        this.basket == ''){}
        else {
            if(this.isEqual == true) {
                this.basket = this.num.innerHTML+operator;
                this.expression.innerHTML = this.basket;}
            else{
                this.basket += operator;
                this.expression.innerHTML += this.basket;
            }
        }       
        this.operator=true;
        this.isEqual = false;
    }

    allClear(){
        this.num.innerHTML = '';
        this.expression.innerHTML= '';
        this.basket = '';
        this.isEqual = false;
        this.operator = false;
    }


    compute(){
        this.expression.innerHTML=this.basket+'=';
        let str = String(eval(this.basket.replaceAll('x','*').replaceAll('÷','/').replaceAll(',',''))); 
        let arr = str.split('');
        if(arr.includes('.')){
            let idxPunctuation = arr.indexOf('.');
            let extra = arr.splice(idxPunctuation);    
            for(let j=3; j<arr.length; j=j+4){            
                arr.splice((arr.length-j),0,',');  
            }
            arr = arr.concat(extra);
        }
        else{
            for(let j=3; j<arr.length; j=j+4){            
                arr.splice((arr.length-j),0,',');  
            }
        }    
        str='';
        for(let i=0; i<arr.length; i++){
            str+=arr[i];
        }
        this.num.innerHTML = str;
        this.isEqual = true;
        this.operator = false;
    }
}

const buttons = document.querySelectorAll('button');
const screenExp = document.querySelector('.screen-expression');
const screenNum = document.querySelector('.screen-num');
const cal = new Cal(screenExp, screenNum);

buttons.forEach(button => {
    button.addEventListener("click", () =>{
        switch(button.id){
            case 'operator' : cal.appendOperator(button.innerHTML); break;
            case 'isEqual' :cal. compute(); break;
            case 'ac' : cal.allClear(); break;
            default : cal.appendNumber(button.innerHTML);
        }
    }
    )
})