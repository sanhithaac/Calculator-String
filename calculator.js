let display = document.getElementById("display");

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Scientific Functions
function sqrt() {
    display.value = Math.sqrt(eval(display.value));
}

function power() {
    let base = prompt("Enter base:");
    let exp = prompt("Enter exponent:");
    display.value = Math.pow(base, exp);
}

function sin() {
    display.value = Math.sin(eval(display.value) * Math.PI / 180);
}

function cos() {
    display.value = Math.cos(eval(display.value) * Math.PI / 180);
}

function tan() {
    display.value = Math.tan(eval(display.value) * Math.PI / 180);
}

function log() {
    display.value = Math.log10(eval(display.value));
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