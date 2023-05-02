
const add_button = document.getElementById('add_button');
let textbox = document.getElementById('textbox');
let todo = document.getElementById('todo');

function add_Todo() {
    if(textbox.value==false){
        alert('내용을 입력하세요');
    } else {
    let works = document.createElement('li');
    let del = document.createElement('button');
    works.innerHTML = textbox.value;
    works.innerHTML += "<input type='checkbox' id='check'></button>";
    works.appendChild(del);   
    del.innerText = "삭제";
    todo.appendChild(works);
    del.addEventListener("click", deleteList);
}}

function deleteList (works){
    let removeOne = works.target.parentElement;
    removeOne.remove();
    
}