// let number = 5;

// if (number % 2 == 0){
//     console.log(number *2);
// }else {
//     console.log(number+2);
// }

// do{
//     console.log('Helloworld');
//     i+=1
// }while(i<5)

///Task - 6

// for(let i=1;i<=10;i++){
//     console.log(i)
// }

//////Task - 7


// let sum = 0;
// for(let i = 0;i<5;i++){
//     sum = sum+i;
// }
// console.log(sum);

/// Task -8 
// let number = 3;
// let fact = 1;
// for(let i=1;i<=number;i++){
//     fact = fact*i;
// }
// // console.log(fact);

// let i=null;
// console.log(i);

// //Task-9
// let n = 7;
// let a = 0, b = 1, temp;

// console.log("Fibonacci Sequence:");

// for (let i = 1; i <= n; i++) {
//     console.log(a);
//     temp = a + b;
//     a = b;
//     b = temp; 
// }

//Task - 10 

// let number = 5;
// let range = 10;
// for(let i = 1;i<=range;i++){
//     console.log(`${number}*${i} =${number*i}`);
// }

//Task - 11;

// let num = 9;
// let count =0 ;
// for(let i =1;i<=num;i++){
//     if(num%i ==0){
//         count++
//     }
// }
// if(count ==2){
//     console.log("Prime")
// }else{
//     console.log('notPrime')
// }

//Task-12 

    let inputString = "AaBbCcDdEe";
    let count = 0;

    // Loop through each character in the string using a for loop
    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i].toLowerCase();
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }   

    console.log( count);