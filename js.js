'use strict';

const todolist = document.querySelector('input'); //input
const listbox = document.querySelector('.list-wrap'); //ul
const addbtn = document.querySelector('button.add'); //add button

//li생성 함수
function addList(val) {
    const li = document.createElement('li')
    li.setAttribute('class', 'li-item');
    //li.textContent(val);
    li.innerHTML = `${val}<span onclick="removeBtn(this);">삭제</span>`;
    listbox.appendChild(li);
};

//버튼 및 엔터 이벤트
addbtn.addEventListener('click', eventFunction);
todolist.addEventListener('keydown',(event) => {
    //console.log(event);
    if(event.keyCode == 13) {
        //console.log('true');
        eventFunction();
    }else {
        //console.log('false');
    }
});

//이벤트 리스너::인풋값 가져오고 리셋
function eventFunction(){
    const inputval = todolist.value;
    //console.log(inputval);
    addList(inputval);
    todolist.value = '';
};

//삭제 함수
function removeBtn(element){
    console.log(element.parentNode);
    const target = element.parentNode;
    listbox.removeChild(target);
};