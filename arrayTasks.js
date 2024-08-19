//Task-13 


let numbers = [1,3,5,7,3,4];
let max = numbers[0];
for(let i= 0;i<numbers.length-1;i++){
    if(numbers[i]>max){
        max = numbers[i]
    }
}
console.log(max);

//Task=14 

var a = [1,2,3,4,5,6,7,8,9,10];
var b = [2,4,5,7,11,15];

for(let i of a){
  if(b.includes(i)){
    console.log(i)
  }
}


//--------- OR --------------

var c = a.filter(value => b.includes(value))
console.log(c)

//Task =15 
    const array = [1, 2, 3, 4, 5];
    const reversedArray = [];

    // Loop through the array from the last element to the first
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }

    console.log( reversedArray);

    // int a = 0;
    // for(a; a<5; a++);
    // console.log(a);