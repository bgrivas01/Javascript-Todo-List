let list = document.getElementById("list");
let input = document.getElementById("textbox");
let button = document.getElementById("button");


function addTodo(){
    let todo = input.value.trim(); //im using trim to get rid of leading empty characters
    if(todo){
        let li = document.createElement("li");
        li.textContent = todo;

        list.appendChild(li);

        input.value = "";
    }
    else{
       console.log("ERROR")
    }
}

button.addEventListener("click", addTodo)
input.addEventListener("keypress", (event) =>{
    if(event.key == "Enter"){
        addTodo();
    }
})

