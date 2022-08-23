// variables for buttons, input and containers
const input = document.getElementById("addtext");
const todocontainer = document.getElementById("myul") ;
const submit = document.getElementById("submitbtn");
const remove = document.getElementById("clearbtn");




submit.addEventListener('click', function(){
    // prevent submit button if input is empty
    
    /* add list component and a remove button for
    individual list components*/ 
    var li = document.createElement('li');
    li.innerText = input.value;
    var but = document.createElement('button');
    but.innerText = "remove";
    todocontainer.appendChild(li);
    todocontainer.appendChild(but);
    but.onclick = function(){
        todocontainer.removeChild(li);
        todocontainer.removeChild(but);
    }
    // clear all task button
    
    input.value = ""

})




