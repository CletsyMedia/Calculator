// Targetting the input
let display = document.getElementById("display");

// Incrementing the value of the input from 0 to any of the digit on the calculator
let calculate=(number)=>{
    display.value += number;
}

let result=()=>{
    // trying to evaluating the result if the inputs are correct if not catch the error and alert the message
    try{
        display.value = eval(display.value)
    }catch(err){
        alert("Input the correct data!")
    }
}
// Clearing the screen to default
function clr(){
    display.value = "";
}
// Deleting input per value using the slice method
function del(){
    display.value = display.value.slice(0, -1)
}