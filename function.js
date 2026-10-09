//object call via through fuction
// // let p1={
//     name:"John",
//     age:30,
//     city:"New York"
// }//local variable
// function printname(p1){
//   //  console.log("My name is John Doe",p1.name);
//     console.log(`Hi ${p1.name}, your age is ${p1.age} and you live in ${p1.city}`);
// }
// printname(p1);   
// function printname(uname,uage,ucity){
//   //  console.log("My name is John Doe",p1.name);
//     console.log(`Hi ${uname}, your age is ${uage} and you live in ${ucity}`);
// }
// printname('harini', 22, 'chennai');
// printname('Alice', 25, 'Los Angeles');

// function uname(uname,age){
//     if(age>40){
//     console.log(`Hi ${uname},your age is ${age} `);
//     }
// }
// uname( "harini",18);
// uname( "harini",56);


// //default parameter
// function printname(uname = "Guest", uage = 0, ucity = "chennai") {
//     console.log(`Hi ${uname}, your age is ${uage} and you live in ${ucity}`);
// }
// printname(); // Uses default values
// printname('Bob', 30); // Uses default city
// printname('Charlie', 35, 'Miami'); // Uses all provided values
// printname(undefined,98, 'New York'); // Uses default name

//set default values to variables
// let emp="ij3243344";
// let newid=emp || "jjn49002n";
// console.log(newid);


//return type and non return type
// function areaofrectangle(length, width) {
//     if(length <= 0 || width <= 0) {

//         console.log("Length and width must be positive numbers.");
//         return; // Exit the function early if invalid input
//     }   
//     else{
//         console.log("Calculating area of rectangle...");
//     }
//     console.log("Calculating area of rectangle...");
//     return length * width;
//     consol+e.log("This line will not be executed because it's after the return statement.");
// }
// console.log(areaofrectangle(5, 10)); // Returns 50

function cubic(num) {
    return (num **3);
}
let newval=cubic(4);
 console.log(newval);