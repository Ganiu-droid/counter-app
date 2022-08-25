

counter = parseInt(document.getElementById('counter').innerText)

//Handles addition
function counterAdd(){
    document.getElementById('counter').innerHTML = counter += 1
}
//Handles Subtraction
function counterSubtract(){
    if(counter > 0)
    document.getElementById('counter').innerHTML = counter -= 1
}

//Handle Reset
function counterReset(){
    counter = 0;
    document.getElementById('counter').innerHTML = counter;
}