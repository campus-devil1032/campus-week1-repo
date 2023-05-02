//목표 : javascript만 쓰기 

//추가해야 할 내용 
// - 아이템 넣기 - 완
// - 로컬 스토리지에 넣기 - 완 (copy한 사이트 : https://thecodingpie.medium.com/how-to-build-a-todo-list-app-with-javascript-and-local-storage-a884f4ea3ec
                            // copy한 사이트 실행화면 : https://codepen.io/thecodingpie/pen/ExPQdqb)
// - 체크박스 - 완
// - li 내용 span tag에 넣기, x표까지 취소선이 들어가 checkbox 옆에 ptag 가져오기 -완
// - 추가로 해볼 만한 것 - 완료된 파일은 따로 빼기 - 완
//                      - 엔터치면 아이템 추가, 클릭하면서 추가하기 귀찮음 -완
//                      - 날짜 지정해서 얼마 안남았으면 alert 띄우기

// 참고사이트 js관련 - https://developer.mozilla.org/ko/docs/Web/API/Element/attributes
// 참고사이트 todo리스트 구현 사이트 : https://www.w3schools.com/howto/howto_js_todolist.asp
// 나중에 볼 만한 ajax로 로컬스토리지에 저장하기 : https://dubaiyu.tistory.com/169
// 나중에 볼 만한 window.localstorage : https://hianna.tistory.com/697
// 형제노드 : https://hianna.tistory.com/712 (이 방식은 삭제됨 -> render함수에서 foreach문이여서 안됨)

let todos = []; //저장할 todos 
let li = document.createElement("li");  //li태그를 만듦 - 전역변수는 어떤 함수에서나 사용가능, li를 만드는 것이 주요 기능이므로 전역변수 선언
let todo_ul = document.getElementById("todoList");               // ul요소 불러오기  --완료시 ul을 나누려면 이게 2개가 되므로 이름을 ul에서 바꿔야 함
let comp_ul = document.getElementById("compliteList");
let todoInput = document.getElementById('newTodo');             //input 태그 가져오기

function addTodo(){                                             // 클릭시 아이템을 넣는 함수
                                                                // const참고 - https://www.freecodecamp.org/korean/news/var-let-constyi-caijeomeun/
                                                                // 객체 리터럴 참고 - https://velog.io/@podonamu01/JavaScript.-%EA%B0%9D%EC%B2%B4%EC%97%90-%ED%82%A4%EA%B0%92-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0
 
    let inputValue = document.getElementById("newTodo").value;  // input 태그 값 가져오기
    if(inputValue==''){                                         //데이터 안넣고 추가하면
        alert("추가할 데이터가 없습니다. 다시 입력해주세요.");
        todoInput.focus();
    } else{                                                     //item이 있으면 객체에 넣기- 객체 리터럴 var obj = {key:vale, ...};             
        const todo = {                                          // 데이터 형태 id:날짜, name; 저장할 데이터, complete : 완료 여부
            id:Date.now(),
            name:inputValue,
            completed:false
        };
       
        todos.push(todo);                                       //데이터가 입력된 객체를 리스트에 넣기
        addToLocalStorage(todos);                               //리스트를 localstorage에 넣기 -> 이 함수 안에 render가 있음
        document.getElementById('newTodo').value="";            //입력 칸 비우기
    }
}

function renderTodos(todos){                                    // todo list 표현하기
                                                                // input checkbox 만들기 참고 : https://www.w3schools.com/jsref/dom_obj_checkbox.asp   
                                                                // checkbox에 체크하는 방법 - 참고 https://seaweedisland.tistory.com/170
                                                                // classList 참고 https://hianna.tistory.com/469  
                                                                // onclick 추가 : https://stackoverflow.com/questions/40282784/onclick-function-on-dynamically-created-span
    todo_ul.innerHTML='';                                            // 리스트 전체 다시 쓰기 -> 변화가 있을 시 매번 render를 통해 전체 리스트가 다시 써지므로
    compliteList.innerHTML='';

    todos.forEach(function(item){                               //***** 중요 ******* foreach문을 통해 로컬스토리지 리스트에 있는 모든 요소를 반복해서 리스트를 만들어냄
        var li = document.createElement("li");                  //li태그를 만듦
        li.className = "item";                                  //<li class="item" ></li>
        li.setAttribute("data-key",item.id);                    //<li class="item" data-key="날짜"></li> -> data-key값이 li고유번호인데
        
        var checkbox = document.createElement("INPUT");         //input tag만들기
        checkbox.setAttribute("type","checkbox");               //checkhobx 만들기
        checkbox.className="checkbox";                                  
        if(item.completed == true) checkbox.checked=true;       //comeplete가 true면 checked
        else checkbox.checked=false;
        li.appendChild(checkbox);                               //li에 checkbox 추가
        checkbox.onclick=function(){                            //li에서 checkbox 생성할 때 이벤트를 넣어줘야 완성/미완성ul이 나뉘어도 잘 작동함
            check(item.id);
        } 



        var span1 = document.createElement("SPAN");             //span tag 만들기
        span1.className = "liData";
        if(item.completed == true) span1.classList.add('checked');  //체크 표시 시 내용에 취소선 긋기 - classname을 먼저 선언해줘야 classList 가능
        else span1.classList.remove("checked");                     //실제 취소선은 CSS에서 그음, 여기서는 class name에 checked만 추가
        var memo = document.createTextNode(item.name);              //***************** 이 내용은 찾아봐야 합니다.
        span1.appendChild(memo);                                    //span태그에 입력값 넣기
        li.appendChild(span1);                                      //li에 span태그 넣기
    
        var span2=document.createElement("SPAN");
        span2.className = "edit";
        var txt1=document.createTextNode("🖉");
        span2.onclick=function(){
            editTodo(this,item.name,item.id);
        }
        span2.appendChild(txt1);
        li.appendChild(span2);

        var span3 = document.createElement("SPAN");             // x버튼 만들기
        span3.className="close";                                // 기능상 없어도 되기는 한데, CSS를 위해 넣어준다.
        span3.onclick=function() {                              // onclick 함께 넣어주기 - 누르면 삭제
            deleteTodo(item.id);
        }
        var txt2 = document.createTextNode("\u00d7");            // x표시
        span3.appendChild(txt2);
        li.appendChild(span3);                                  // li에 x표시 추가
        
        if(item.completed==true)                                // 완성된 목록은 완성된 목록으로 따로 빼자
            comp_ul.append(li);
        else
            todo_ul.appendChild(li);                            // ul에 완성된 li 넣기 - 해야 할 일만
        todoInput.value="";                                     //입력 칸 비우기
    })

}

function addToLocalStorage(todos){                              //todo-list localstorage에 넣기 - 여기에만 넣으면 refresh시 사라짐
    localStorage.setItem('todos',JSON.stringify(todos));
    renderTodos(todos);
}

function getFromLocalstorage(){                                 //todo-list localstorage에 넣기 - 아래 과정을 거쳐야 storage에 저장됨
    const reference = localStorage.getItem('todos');
    if(reference){
        todos=JSON.parse(reference);
        renderTodos(todos);
    }
}
getFromLocalstorage();

function deleteTodo(id){                                        //삭제 버튼 누르면 storage에서 아이템 삭제
    todos = todos.filter(function(item){
        return item.id!=id;
    });
    addToLocalStorage(todos);
}

// 아래 부분은 생성 시 onclick으로 변경함
// var clickBox = document.getElementById("todoList");
// clickBox.addEventListener("change",function(event){             //check박스 선택 시
//                                                                 //change 따라한 사이트 : https://stackoverflow.com/questions/14544104/checkbox-check-event-listener
//                                                                 // getElementByID , getElementByClassName() 설명 - https://www.digitalocean.com/community/tutorials/how-to-modify-attributes-classes-and-styles-in-the-dom
//                                                                 // addEventListner는 getElementByClassName()으로 안되는가 참고 - https://fennecfox-dev.tistory.com/5
//     check(event.target.parentElement.getAttribute('data-key'));
    
// });


var input = document.getElementById("newTodo");
input.addEventListener("keyup",function(event){                 // 엔터 누르면 버튼 누르기 
                                                                // enter 이벤트 참고 : https://codesource.io/how-to-trigger-enter-key-in-javascript/
    if(event.keyCode === 13){
        event.preventDefault();
        document.getElementById("newTodoBTN").click();
    }
});

function check(id){                                             //체크 박스 클릭시 취소선 
    todos.forEach(function(item){
        if(item.id == id){
            item.completed = !item.completed;
        }
    });
    addToLocalStorage(todos);                                   // 완료 시 목록 바꾸는 거 - 여기서 render를 다시하니까 if-else로 영역을 나누면 됨
}

function editTodo(obj,content,id){
    var li = obj.parentElement;
    li.innerHTML = "";
    var editInput = document.createElement("INPUT");
    editInput.setAttribute("value",content);

    var editBtn = document.createElement("BUTTON");
    var memo = document.createTextNode("수정");
    editBtn.appendChild(memo);
    editBtn.onclick=function(){
        // alert(editInput.value)
        excuetEditTodo(id,editInput.value);
    };
    var cancelBtn = document.createElement("BUTTON");
    var memo2 = document.createTextNode("취소");
    cancelBtn.appendChild(memo2);
    cancelBtn.onclick=function(){
        excuetEditTodo(id,content);
    };
    li.appendChild(editInput);
    li.appendChild(editBtn);
    li.appendChild(cancelBtn);

}

function excuetEditTodo(id,content){
    // alert(obj.value)
    todos.forEach(function(item){
        if(item.id == id){
            item.name=content;
        }
    });
    addToLocalStorage(todos);
}