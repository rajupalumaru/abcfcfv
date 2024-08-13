// let x= 10;
// let y = 12;
// x= x+y;
// y = x-y;
// x = x-y;
// console.log(2*x)
// console.log(2*y)

// if condition examples

// let age = 20;
// if(age>18){
//     console.log('you are eligible to vote');
// }

// let marks =50;

// if(marks > 40){
//     console.log('you have passed your exams!');
// }else if(marks == 40){
//     console.log('you have just passed your exam!')
// }else{
//     console.log('you have failed your exam!')
// }

let salary = 20000;
switch(salary){
    case 10000:
        console.log('you have very less salary');
        break;
    case 20000:
        console.log('you have less salary');
        break;
    case 50000:
        console.log('you have good salary');
        break;
    case 70000:
        console.log('you have very good salary');
        break;
    default:
        console.log('cant get your salary');
        break;
}