// Getting an element from the DOM:

//First button

const button = document.getElementById('btn');
button.addEventListener('click', buttonClicked);

function buttonClicked(){
    console.log("clicked me");
}