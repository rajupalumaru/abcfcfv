// let operation = 'multiply';
// let num1 = 15;
// let num2 = 5;

// let result;

// if(operation == 'add'){
//     result = num1 +num2;
// }else if(operation == 'sub'){
//     result = num1 - num2;
// }else if (operation == 'division'){
//     result = num1/num2;
// }else if(operation == 'multiply'){
//     result = num1*num2;
// }

// console.log(result);

// percantage Taks:3 

// let percentage = 905;

// if (percentage >= 40 && percentage < 50) {
//     console.log("Buy a pen.");
// } else if (percentage >= 50 && percentage < 60) {
//     console.log("Buy a Book.");
// } else if (percentage >= 60 && percentage < 70) {
//     console.log("Buy a Bag.");
// } else if (percentage >= 70 && percentage < 80) {
//     console.log("Buy a Watch.");
// } else if (percentage >= 80 && percentage < 90) {
//     console.log("Buy a Mobile.");
// } else if (percentage >= 90 && percentage <= 100) {
//     console.log("Buy a Laptop.");
// } else {
//     console.log("Fail");
// }


// let aadhar = '826435924786';
// if(aadhar.length !== 12 ){
//     console.log('Invalid Aadhar Number: Length of Aadhar is Invalid');
// }else if(aadhaar.startsWith('0') || aadhaar.startsWith('1')){
//     console.log('Invalid Aadhaar Number');
// }else {
//     console.log('Valid Aadhaar Number')
// }



//Task = 4 Aadhar validation example

function validateAadhar(aadhar) {
    // Condition 1: Length of Aadhar is 12 digits
    if (aadhar.length !== 12) {
        return "Invalid Aadhar Number: Length of Aadhar is Invalid";
    }

    // Condition 2: Aadhar contains only digits
    for (let i = 0; i < aadhar.length; i++) {
        if (aadhar[i] < '0' || aadhar[i] > '9') {
            return "Invalid Aadhar Number: Aadhar contains non-digit characters";
        }
    }

    // Condition 3: Aadhar Number Should not start with 0 or 1
    if (aadhar.startsWith('0') || aadhar.startsWith('1')) {
        return "Invalid Aadhar Number: Aadhar cannot start with 0 or 1";
    }

    // If all conditions are met
    return "Valid Aadhar Number";
}

// Example usage
const aadharNumber = "837435924786";
const result = validateAadhar(aadharNumber);
console.log(result);

