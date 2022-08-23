
//selectors
const todoinput = document.querySelector('.todo-input');
const todobutton = document.querySelector('.todo-button');
const todolist = document.querySelector('.todo-list');

//eventlistener
todobutton.addEventListener('click', addtodo);

//functioality

function addtodo(event){
    event.preventDefault();
    //tododiv
    const tododiv = document.createElement("div");
    tododiv.classList.add('todo');
    //create list
    const newtodo = document.createElement('li');
    newtodo.innerText = document.getElementById("addtext").value;
    newtodo.classList.add('todo-item');
    tododiv.appendChild(newtodo);
    //check mark button
    const completedbutton = document.createElement('button');
    completedbutton.innerHTML = '<i class="fas fa-check></li>'
    completedbutton.classList.add('complete-btn')
    tododiv.appendChild(completedbutton);
    // delete button
    const trashbutton = document.createElement('button');
    trashbutton.innerHTML = '<i class="fas fa-trash></li>'
    trashbutton.classList.add('complete-btn')
    tododiv.appendChild(trashbutton);
    //add to do list
    todolist.appendChild(tododiv)
    //clear
    todoinput.value = "";
} 