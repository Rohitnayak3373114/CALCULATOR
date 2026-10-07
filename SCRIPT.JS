const display = document.getElementById("display");

// Add number/operator to display
function addToDisplay(value) {

    if (display.value === "0") {
        display.value = value;
    } else {
        display.value += value;
    }
}


// Clear calculator
function clearDisplay() {
    display.value = "0";
}


// Delete last character
function deleteLast() {

    display.value = display.value.slice(0, -1);

    if (display.value === "") {
        display.value = "0";
    }
}


// Calculate result
function calculate() {

    try {
        display.value = eval(display.value);
    }

    catch (error) {
        display.value = "Error";
    }
}