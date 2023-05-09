const groceries = document.getElementsByClassName("grocerios")[0];
const eraser = document.getElementById("eraser");
const allItems = document.getElementById("allItems");
const userInput = document.getElementById("userInput");


/**To delete the item when the icon is clicked */
eraser.addEventListener("click", function(){
    allItems.innerHTML = "";
})

/**so as to add new item when the enter key is pressed */
userInput.addEventListener("keydown", function(event){
    if(event.key == "Enter")
    addItem();
})

function addItem(){
    /**to make the input h2*/
    var h2 = document.createElement("h2");
    /**to set the innerhtml of h2 equal to the userinput through the userInput var */
    h2.innerHTML = "- " + userInput.value;
    
    /**to make a line drown through when you click on the item */
    h2.addEventListener("click", function(){
        h2.style.textDecoration = "line-through";
    })

    /**insert h2 elementto allItems container use beforeend to add at the end of the list*/
    allItems.insertAdjacentElement("beforeend", h2);

    /**to delete the text in the place holder when to enter an item*/
    userInput.value = "";
}