$(document).ready(function () {

    // 로컬 스토리지에서 할 일 목록 불러오기
    const todoList = JSON.parse(localStorage.getItem("todoList")) || [];


    // 할 일 목록을 HTML 페이지에 출력
    function renderTodoList() {
        const $todoList = $("#todo-list");
        $todoList.empty();
        for (const [index, todo] of todoList.entries()) {
 
            const $li = $("<li></li>").addClass("list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2");
            const $div = $("<div></div>").addClass("form-check align-items-center");
  
            const $checkbox = $("<input type='checkbox'>").addClass("form-check-input me-2").prop("checked", todo.completed);
            $checkbox.on("change", function () {
                if ($(this).prop("checked")) {
                    $(this).siblings(".form-check-label").css("text-decoration", "line-through");
                } else {
                    $(this).siblings(".form-check-label").css("text-decoration", "none");
                }
                todo.completed = $checkbox.prop("checked");
                saveTodoList();
            });
            const $label = $("<label></label>").addClass("form-check-label").text(todo.text);
            if (todo.completed) {
                $label.css("text-decoration", "line-through");
            }
            $div.append($checkbox).append($label);

            
            // 타임스탬프
            const timestamp = new Date(todo.timestamp).toLocaleString();
            const $timestamp = $("<span></span>").addClass("ms-auto badge rounded-pill bg-secondary").text(timestamp);


            // 삭제버튼
            const $button = $("<button></button>").addClass("ms-2 btn btn-danger").text("X");
            $button.on("click", function () {
                todoList.splice(index, 1);
                saveTodoList();
            });


            $li.append($div).append($timestamp).append($button);
            $todoList.append($li);
        }

        $("#countTodo").text(`(${todoList.length})`)       // 리스트 개수 전달
    }


    // 할 일 목록을 로컬 스토리지에 저장하는 함수
    function saveTodoList() {
        localStorage.setItem("todoList", JSON.stringify(todoList));
        renderTodoList();
    }


    // 초기 로딩 시 할 일 목록 보여주기
    renderTodoList();


    // 새로운 할 일을 입력하는 이벤트 핸들러
    $("#todo-form").on("submit", function (event) {
        event.preventDefault();     // submit의 폼 제출을 막음
        const todoText = $("#form3").val();     // 입력한 내용을 가져옴
        if (todoText) {             // 내용을 입력한 경우에만 추가하도록 판별
            const newTodo = {
                text: todoText,
                completed: false,
                timestamp: Date.now()    // 타임스탬프 추가
            };
            todoList.push(newTodo);     // 새로운 할 일 객체를 배열에 추가
            saveTodoList();             // 로컬 스토리지에 저장
            $("#form3").val("");        // 입력값 초기화
        }
    });

})