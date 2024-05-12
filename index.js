let screen = document.getElementById("screen");
let expression = "";
console.log();
function appendToscreen(value) {
    if (screen.textContent === 0) {
        screen.textContent = value;
    } else if (screen.textContent !== 0) {
        screen.textContent += value;
    }
    expression += value;
}
function clearScreen() {
    screen.textContent = "";
    expression = "";
}
 function calculate() {
   try {
     let result = eval(expression);
     screen.textContent = result;

   } catch (error) {
     screen.textContent = "Error";
   }
}
function remove() {
    screen.textContent = screen.textContent.slice(0, -1);
 }