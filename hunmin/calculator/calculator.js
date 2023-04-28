class Calculator{
    constructor(displayElement){
        this.displayElement = displayElement
        this.operatorCheck = true
        this.equalCheck = false
        this.clear() //clear() 메서드는 객체를 비운다.
    }

    appendNumber(number){
        if(this.equalCheck){
            this.displayContent = number
            this.equalCheck = false
        }else{
            this.displayContent += number
        }
        this.operatorCheck = false
    }

    appendOperator(operator){
        if(this.operatorCheck) return false
        if(this.equalCheck) this.equalCheck = false
        this.displayContent += operator
        return this.operatorcheck = true
    }

    updateDisplay(){
        this.displayElement.value = this.displayContent
    }

    clear(){
        this.displayContent = ''
        this.displayElement.value = 0
        this.operatorCheck = true
    }

    compute(){
        this.equalCheck = true
        if(this.operatorCheck) return
        this.displayContent = eval(this.displayContent
            .replace('\u00D7', '*')
            .replace('\u00F7', '/'))
    }
}

const buttons = document.querySelectorAll('button')
const displayElement = document.querySelector('input')
const calculator = new Calculator(displayElement) 

buttons.forEach(button =>{
    button.addEventListener('click', () => {
        switch(button.dataset.type){
            case 'operator':
                if(calculator.appendOperator(button.innerText)){
                    calculator.updateDisplay()
                }
                break
            case 'ac':
                calculator.clear()
                break
            case 'equals':
                calculator.compute()
                calculator.updateDisplay()
                break
            default:
                calculator.appendNumber(button.innerText)
                calculator.updateDisplay()
                break
        }
    })
})