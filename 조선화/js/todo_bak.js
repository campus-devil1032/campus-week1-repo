//추가해야 할 내용 
// - 아이템 넣기 - 완
// - 엔터치면 아이템 추가 - 클릭하면서 추가하기 귀찮음
// - 로컬 스토리지에 넣기
// - 체크박스 - 완
// - li 내용 span tag에 넣기, x표까지 취소선이 들어가 checkbox 옆에 ptag 가져오기 -완

function addTodo(){ //클릭시 아이템을 넣는 함수
                    // 참고사이트1 todo리스트 구현 사이트 : https://www.w3schools.com/howto/howto_js_todolist.asp
                    // 참고사이트2 onclick 추가 : https://stackoverflow.com/questions/40282784/onclick-function-on-dynamically-created-span
                    // 참고사이트3 input checkbox 만들기 : https://www.w3schools.com/jsref/dom_obj_checkbox.asp
                    // 형제노드 : https://hianna.tistory.com/712
                    // enter 이벤트 : https://codesource.io/how-to-trigger-enter-key-in-javascript/

    var li = document.createElement("li");  //li태그를 만듦
    var todo = document.getElementById('newTodo');  //input 태그 가져오기                                 
    
    var inputValue = document.getElementById("newTodo").value;  // input 태그 값 가져오기
    if(inputValue==''){
        alert("추가할 데이터가 없습니다. 다시 입력해주세요.");
        todo.focus();
    }

    var t = document.createTextNode(inputValue);   //태그 값을 택스트로 저장하기    

    //checkhobx 만들기
    var checkbox = document.createElement("INPUT"); 
    checkbox.setAttribute("type","checkbox");
    checkbox.onclick=function(){
        check(this);
    }
    li.appendChild(checkbox); //li에 checkbox 추가  

    //span tag 만들기
    var span1 = document.createElement("SPAN");
    span1.className = "liData";
    span1.appendChild(t);   //span태그에 입력값 넣기
    li.appendChild(span1);  //li에 span태그 넣기

    document.getElementById('todoList').appendChild(li);    //ul에 li추가
    document.getElementById('newTodo').value="";    //입력 칸 비우기

    // x버튼 만들기
    var span2 = document.createElement("SPAN");
    var txt = document.createTextNode("\u00d7");
    span2.className="close";
    span2.onclick=function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
    span2.appendChild(txt);
    li.appendChild(span2);
}


//체크 박스 클릭시 취소선 
function check(box){
    if(box.checked == true){
        var div = box.nextSibling;
        div.style.textDecorationLine="line-through";
    }else{
        var div = box.nextSibling;
        div.style.textDecorationLine="";
    }
        
}

// 엔터 누르면 버튼 누르기 
// - 참고사이트 enter 이벤트 : https://codesource.io/how-to-trigger-enter-key-in-javascript/

var input = document.getElementById("newTodo");
input.addEventListener("keyup",function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        document.getElementById("newTodoBTN").click();
    }
});

//체크 박스 클릭시 취소선 
// function check(id){
//     todos.forEach(function(item){
//         if(item.id == id){
//             item.completed = !item.completed;
//         }
//     });
//     addToLocalStorage(todos);    
// }
