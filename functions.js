


//function declaration

function greet(){
    console.log("Hello World!")
}

greet();

function add(a,b){
    console.log(a+add+b);
}
add(10,13);
add(2,3);
add(2,3);

//function Expression
const multiply = function(a,b){
    console.log(a*b)
}
multiply(2,3)


//
function add(a,b){
    return a*b;
}
console.log(add(2,4))

//Arrow funtions 

 const adding = (a,b)=>a+b;
 console.log(adding(3,4))

 const greett = (name) =>console.log(`Hello ${name}`);
 greett('Raju');

 const area = (side)=>{
    console.log(side*side)
 }
 area(2);