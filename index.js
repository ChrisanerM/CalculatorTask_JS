let output = document.getElementById("dsply-box")
let  myDecimal = true;

function calculation(anyVal) {
    output.value = output.value + anyVal;
}
function operators(anyVal) {
    output.value = output.value + anyVal;
     myDecimal = true; 
}
function del() {
    output.value = output.value.slice(0, -1);
}
function decimal(anyVal) {
  if (myDecimal === true) {
      output.value = output.value + anyVal;
      myDecimal = false; 
  }

}
function clr() {
    output.value = "";
    output.value = output.value + anyVal;
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
