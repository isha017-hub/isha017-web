 // console.log("one");
// console.log("two");
// console.log("three");
// setTimeout(function(){
//     console.log("hello after 5 seconds");
// },50000);
// console.log("four");
// console.log("five");
// setTimeout(()=>{
//     console.log("hello after 3 seconds");
// },3000);

// function welcome(){
//     console.log("welcome to javascript");
// }
// setTimeout(welcome,2000);/

function greet(name){
    console.log("hello"+name);
}
setTimeout(greet,2000,"isha");

function greet(name,surname){
    console.log(name+surname);
}
setTimeout(greet,2000,"isha","choudhary");