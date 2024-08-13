function calculate() {
    // Get input values
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const operation = document.getElementById('operation').value;
    
    let result;

    // Perform calculation based on the selected operation
    if (operation === 'add') {
        result = num1 + num2;
    } else if (operation === 'subtract') {
        result = num1 - num2;
    } else if (operation === 'multiply') {
        result = num1 * num2;
    } else if (operation === 'divide') {
        if (num2 === 0) {
            result = "Error: Division by zero";
        } else {
            result = num1 / num2;
        }
    } else {
        result = "Invalid operation";
    }

    // Display the result
    document.getElementById('result').innerText = "Result: " + result;
}
