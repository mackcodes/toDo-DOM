var add = document.querySelector(".task-column");        // selected the input column   
var btn = document.querySelector("button");                 //slected the button

let currentIdx = 1;
btn.addEventListener("click", function(){        //added event listener to the button and started defining the function
    var value = add.value;

    const newDivEl = document.createElement("div");  // added a new div in the body
    newDivEl.setAttribute("id", currentIdx);
   
    newDivEl.innerHTML = "<div>" + value + "</div><button onclick='deleteTodo(" + currentIdx + ")'>Delete</button>";

    document.querySelector("body").appendChild(newDivEl);     //added a new child in the div 
    currentIdx = currentIdx + 1;
    add.value = " ";                            //this clears the input after the task is added

})

function deleteTodo(index){
    const element = document.getElementById(index);
    element.parentNode.removeChild(element);

    console.log("something got deleted");
}