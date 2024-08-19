
const str = "Hello iam raju from hyd";

const words = str.split(' ');

function reverseWord(word) {
    return word.split('').reverse().join('');
}

const result = words.map((word, index) => {
    return (index % 2 === 1) ? reverseWord(word) : word;
}).join(' ');

console.log(result);  

/////////////////////////////////////////////////////////////////////////

const str1 = "Hello iam raju from hyd";
const words1 = str1.split(' ');

function reverseWord(word) {
    let reversed = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }
    return reversed;
}
let resultArray = [];
for (let i = 0; i < words1.length; i++) {
    if (i % 2 === 1) { 
        resultArray.push(reverseWord(words1[i]));
    } else {
        resultArray.push(words1[i]);
    }
}
const result1 = resultArray.join(' ');
console.log(result1); 
