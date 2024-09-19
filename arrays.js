let numbers = [1,2,3,4,5];
console.log(numbers);

let names = ['ravi','raju','rama'];
console.log(names);

let mixed = ['banana',6,true];
console.log(mixed);

let fruits = ['banana','pear','grapes'];
fruits.push('orange');
fruits.pop();
fruits.unshift('orange');
fruits.shift();
console.log(fruits);


for(let i = 0;i<=fruits.length-1;i++){
    console.log(fruits[i])
}

for(let item of fruits){
    console.log(item)
}
