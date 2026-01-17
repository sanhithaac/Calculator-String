let display = document.getElementById("display");
function safesafeEval(expression) {
  return Function('"use strict"; return (' + expression + ')')();
}

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = safeEval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Scientific Functions
function sqrt() {
    display.value = Math.sqrt(safeEval(display.value));
}

function power() {
    let base = prompt("Enter base:");
    let exp = prompt("Enter exponent:");
    display.value = Math.pow(base, exp);
}

function sin() {
    display.value = Math.sin(safeEval(display.value) * Math.PI / 180);
}

function cos() {
    display.value = Math.cos(safeEval(display.value) * Math.PI / 180);
}

function tan() {
    display.value = Math.tan(safeEval(display.value) * Math.PI / 180);
}

function log() {
    display.value = Math.log10(safeEval(display.value));
}

// String Operations
function stringLength() {
    let s = document.getElementById("str1").value;
    document.getElementById("stringResult").innerText =
        "Length: " + s.length;
}

function reverseString() {
    let s = document.getElementById("str1").value;
    document.getElementById("stringResult").innerText =
        "Reversed: " + s.split("").reverse().join("");
}

function concatenate() {
    let s1 = document.getElementById("str1").value;
    let s2 = document.getElementById("str2").value;
    document.getElementById("stringResult").innerText =
        "Result: " + s1 + s2;
}

function substring() {
    let s = document.getElementById("str1").value;
    let start = prompt("Start index:");
    let end = prompt("End index:");
    document.getElementById("stringResult").innerText =
        "Substring: " + s.substring(start, end);
}

function compare() {
    let s1 = document.getElementById("str1").value;
    let s2 = document.getElementById("str2").value;
    document.getElementById("stringResult").innerText =
        s1 === s2 ? "Strings are Equal" : "Strings are Not Equal";
}