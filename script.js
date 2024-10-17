var add = document.querySelector(".task-column");        // selected the input column   
var btn = document.querySelector("button");                 //slected the button

btn.addEventListener("click", function(){        //added event listener to the button and started defining the function
    var value = add.value;

    const newDivEl = document.createElement("div");  // added a new div in the body
    newDivEl.innerHTML = value;

    document.querySelector("body").appendChild(newDivEl);     //added a new child in the div 
    add.value = " ";                            //this clears the input after the task is added

})