// variables for buttons, input and containers
const input = document.getElementById("addtext");
const todocontainer = document.getElementById("myul") ;
const submit = document.getElementById("submitbtn");






submit.addEventListener('click', function(){
    // prevent submit button if input is empty
    
    /* add list component and a remove button for
    individual list components*/ 
    var li = document.createElement('li');
    li.innerText = input.value;
    var but = document.createElement('button');
    but.innerText = "remove";
    var checker = document.createElement('input')
    checker.type = "checkbox"
    todocontainer.appendChild(li);
    todocontainer.appendChild(but);
    todocontainer.appendChild(checker);
    li.id = "li"
    but.id = "but"
    checker.id = "checker"
    but.onclick = function(){
        todocontainer.removeChild(li);
        todocontainer.removeChild(but);
        todocontainer.removeChild(checker);
    }
    
    
    
    
    
    

    input.value = ""

})





