let output = document.getElementById("dsply-box")
let  myDecimal = true;

function calculation(anyInput) {
    output.value = output.value + anyInput;
}
function operators(anyInput) {
    output.value = output.value + anyInput;
     myDecimal = true; 
}
function del () {
    output.value = output.value.slice(0, -1);
}
function decimal(anyInput) {
  if (myDecimal === true) {
      output.value = output.value + anyInput;
      myDecimal = false; 
  }

}
function clr() {
    output.value = "";
    output.value = output.value + anyInput;
     myDecimal = true; 
}
function equal() {
    try {
        output.value = eval(output.value)
    }
    catch (err) {
        output.value = "Error!"
     }
}
