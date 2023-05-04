const addBtn = document.getElementById("addBtn");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todos = JSON.parse(localStorage.getItem('todos')) || [];

/**
 * 처음 화면 로딩시 todoList 화면에 그리기
 * @param todos
 */
const renderTodoItem = (todos) => {
    // html 초기화
    todoList.innerHTML = "";

    if(!todos.length){
        return;
    }

    todos.forEach( todo => {
        createTodoItem(todo);
    })
}

/**
 * addEventListener 등록
 * 1. 추가 버튼 클릭 (submit)
 */
addBtn.addEventListener("click", (e) => {
    const text = todoInput.value;
    addTodoItem(text);
});

/**
 * TodoItems 추가
 */
const addTodoItem = (text) => {
    if(text === ""){
        alert("공백은 입력 불가능 합니다 ^0^");
        return;
    }
    const newTodo = {
        title: text,
        completed: false,
    }

    // 배열에 삽입 -> 그 배열을 localStorage 에 저장
    todos.push(newTodo);
    saveLocalStorage(todos);

    // 새로운 목록 화면에 그리기
    createTodoItem(newTodo);
}

/**
 * todoItem 삭제
 * todos.indexOf(todo) 로 해당 todo 의 인텍스 번호를 받와서 삭제
 * @param todo
 */
const deleteTodoItem = (todo) => {
    // todoItem 삭제 후 localStorage 에 저장
    todos.splice(todos.indexOf(todo), 1);
    saveLocalStorage(todos);

    // 화면 다시 render
    renderTodoItem(todos);
}

/**
 * View 에 todoItem 그리기
 * @param todo
 */
const createTodoItem = (todo) => {
    const li = document.createElement("li");

    if(todo.completed){
        li.classList.add("completed");
    }

    // 타이틀
    const span = document.createElement("span");
    span.innerHTML = todo.title;

    // 목록 클릭 시 completed 토글
    li.addEventListener("click", () => {
        todo.completed = !todo.completed;
        if(todo.completed){
            li.classList.add("completed");
        }else {
            li.classList.remove("completed");
        }
        localStorage.setItem('todos', JSON.stringify(todos));
    })

    // 삭제 버튼
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "삭제";
    deleteBtn.classList.add("deleteBtn");

    deleteBtn.addEventListener("click", () => {
        deleteTodoItem(todo);
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
}

const saveLocalStorage = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

/**
 * todoList 그리기
 */
renderTodoItem(todos);
