// Getting an element from the DOM:

//First button

let button = document.getElementById('#btn');
button.addEventListener('click', buttonClicked());

function buttonClicked(){
    console.log("button clicked");
}