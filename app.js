let todoInput = document.querySelector('#todo');
let ol = document.querySelector('ol');

let arr = []

function addTodo(){
    ol.innerHTML = ''
    // console.log(todoInput.value);
    arr.push(todoInput.value);
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        ol.innerHTML += `<li>${arr[i]} </li>`
        
    }

    todoInput.value = ''
}