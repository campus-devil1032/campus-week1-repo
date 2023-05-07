const btn = document.getElementById('btn');         //getElementById() = 'Id로부터 요소를 가져온다'로 생각하면 편함
let addValue = document.getElementById('addValue'); //let으로 선언된 변수는 해당 범위 내에서 업데이트 가능, 단 범위 내에서 재선언 불가
let result = document.getElementById('result');    //추가된 할 일


function addTodo() {
    if (addValue.value == false) { // if 조건문은 if(조건식)이 참이면 {}안의 실행문을 1회 실행함, (조건식)영역이 거짓이면 if문 탈출
        alert('내용을 입력하세요!');
    } 
        else { // if else 조건문은 if(조건식){}에 참일 경우 실행 코드 입력, else{}코드에는 if(조건식)이 거짓일 경우 실행될 코드를 입력한다.
        let list = document.createElement("li"); //document.createElement("") : ("")안에 쓰여진 요소 만들기
        let del = document.createElement('button'); //버튼 만들기
        list.innerHTML = addValue.value; //list.innerHTML : element 안의 HTML이나 XML을 가지고 옴
        result.appendChild(list); // appendChild 메서드는 오직 Node 객체만 받을 수 있음, 추가된 할일에 할일 리스트 추가하기
        list.appendChild(del);    //리스트 추가 시 삭제 버튼 같이 추가    
        del.innerText = "x"; //list.innerText : element 안의 text값들만을 가지고 옴
        del.style.fontSize = "20px"; //요소.style.속성="값"; 으로 자바스크립트 내에서 CSS 변경 가능
        del.style.cursor = "pointer"; // 마우스 올리면 커서가 손가락 모양으로 바뀜
        del.addEventListener("click", deleteList); //addEventListener : 클릭 시 click 함수를 실행하도록 하는 스크립트, 리스트 삭제
        del.style.position = 'relative';
    }
}
// 할 일 목록 삭제
function deleteList(e) { //삭제 버튼(x) 클릭시 
    let removeOne = e.target.parentElement;  //선택한 목록 한개만 지우기(부모 객체를 지운다)
    removeOne.remove();
}
