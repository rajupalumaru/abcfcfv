// function add(a,b){
//     console.log(a+add+b);
// }
// add(10,13);

var x= 10;
y = x--+1;
alert(y)


//Task-17 
//Given an array of strings, write a function to find the unique elements in the array and return them in a new array.
 
function findUniqueElements(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

const array = ["apple", "banana", "apple", "orange", "banana", "grape"];
const uniqueArray = findUniqueElements(array);
console.log(uniqueArray);

//  Task Palindome Number that takes string 
//----------------------------------------------------------------------------------
function isPalindrome(str) {
    // Convert the string to lowercase and remove all non-alphanumeric characters
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Compare the cleaned string with its reverse
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reversedStr;
}

// Example usage
console.log(isPalindrome("racecar"));  // Output: true
console.log(isPalindrome("hello"));    // Output: false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true