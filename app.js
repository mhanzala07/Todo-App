let todoInput = document.querySelector('#todo');
let ol = document.querySelector('ol');

let arr = []

function addTodo(){
    ol.innerHTML = ''
    // console.log(todoInput.value);
    arr.push(todoInput.value);
    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        ol.innerHTML += `<li>${arr[i]} 
        <button onclick = "deleteTodo(${i} )" >delete</button>
        <button onclick = "editTodo(${i} )">edit</button>
        </li>`
    }

    todoInput.value = ''
}



function deleteTodo(index){
    console.log('delete todo' , index);
    arr.splice(index , 1);
    ol.innerHTML = ''
    for (let i = 0; i < arr.length; i++) {
        ol.innerHTML += `<li>${arr[i]} 
        <button onclick = "deleteTodo(${i} )" >delete</button>
        <button onclick = "editTodo(${i} )">edit</button>
        </li>`
    }

}

function editTodo(index){
    // console.log('edit todo' , index);
    let updatedValue = prompt ('enter your value')
    arr.splice(index , 1 , updatedValue)
    // console.log(updatedValue);
    ol.innerHTML = ''
    for (let i = 0; i < arr.length; i++) {
        ol.innerHTML += `<li>${arr[i]} 
        <button onclick = "deleteTodo(${i} )" >delete</button>
        <button onclick = "editTodo(${i} )">edit</button>
        </li>`
    }

    
    ol.innerHTML = ''
    // console.log(todoInput.value);
    arr.push(todoInput.value);
    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        ol.innerHTML += `<li>${arr[i]} 
        <button onclick = "deleteTodo(${i} )" >delete</button>
        <button onclick = "editTodo(${i} )">edit</button>
        </li>`
    }

}
