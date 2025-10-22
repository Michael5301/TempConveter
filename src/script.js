

// Temp Conversion
const inputBox = document.getElementById("inputBox");
const toFarenhet = document.getElementById("toFarenhet");
const toCelcius = document.getElementById("toCelcius");
const results = document.getElementById("results");
let temp;

function tempConver() {
    if (toFarenhet.checked) {
        temp = ((inputBox.value * 9) / 5 + 32).toFixed(1);
        results.textContent = `Temperature is ${temp}° Fahrenheit.`;
        results.style.color = "black";
        results.style.padding = "8px";
    } else if (toCelcius.checked) {
        temp = (((inputBox.value - 32) * 5) / 9).toFixed(1);
        results.textContent = `Temperature is ${temp}° Celcius.`;
        results.style.color = "black";
        results.style.padding = "8px";
    } else {
        results.textContent = "Please select a uni to be converted";
        results.style.color = "red";
        results.style.padding = "8px";
    }
}

// Calculator
let display = document.getElementById("display");

function appendTOdisplay(input) {
    display.value += input;
}

function clearAll() {
    display.value = "";
}

function calculate(params) {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error, try again!";
    }
}
