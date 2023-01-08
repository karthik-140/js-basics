/*let student={
    age:20
}
let getage=function(){
    console.log(this.age);
}
let check=getage.bind(student);
check();*/

/*const student={age:20};
const createfunction=function(a){
    return this.age+a;
}
const ans=createfunction.bind(student);
console.log(ans(2));*/

/*const call={name:"karthik",age:22,id:1};
const createFunction=function(){
    console.log(this.name+ " "+this.age+" "+this.id);
}    
createFunction.call(call);

const key=Object.keys(call);
console.log(key);
for(var i=0;i<key.length;i++){
    
    const keysval=call[key];
    console.log(keysval.value);
}*/

// var a=function abc(){
//     console.log("Hello");
// }
// function xyz(){
//     return a();
// }

// console.log(xyz());

// function currying(num){
//     return (value) =>{

//         console.log(num+value);
//     }
// }
// const add=currying(100)(50);

// setTimeout(() => console.log('timer2 expired'), 0)
// function x(y) {
//     console.log('inside x');
//     y();
// }
// x(function y() {
//     setTimeout(() => console.log('inside y'), 0)
// })
// setTimeout(() => console.log('timer1 expired'), 1000)

// function closure(){
//     var count=1;
//     document.getElementById('clickme').addEventListener('click', function(){
//         console.log('clicked me', count++);
//     })
// }
// closure();



// document.addEventListener('DOMContentLoaded', function (){
//     console.log('DOM loaded');
// })

// console.log('a');
// console.log('b');=
// setTimeout(() => console.log('e'), 1000)
// setTimeout(() => console.log('c'), 0)
// console.log('d')

// const arr1=[1,2,3];
// const arr2=[4,5,6];
// const arr3=[...arr1,...arr2];
// console.log(arr3);

// const obj1={
//     name:"karthik",
//     age:"22"
// };
// const obj2={...obj1, name:"tharun", id:2};
// //obj2.name="varun";
// console.log(obj2);

//  const studentobj = {
// 	'yash': 26,
// 	'vaibhav': 24,
// 	'rajesh' : 25,
// 	}
// const keys=Object.keys(studentobj);
// var sum=0;
// keys.forEach(key => {
//     sum=sum+studentobj[key];
// })
// console.log(sum);
// const avg=sum/keys.length;
// console.log(avg);


// const studentobj = {
//      	'yash': 26,
//      	'vaibhav': 24,
//      	'rajesh' : 25,
//     }
//      function findAverageAge(){
//         const keys=(Object.keys(studentobj));
//         var sum=0;
       
//         keys.forEach(key =>{
//              sum=sum+studentobj[key];
//         })
//         avg=sum/keys.length;
//         console.log(avg);
//     }
//     findAverageAge();

// const arr=[{id:1,name:'karthik'}, {id:2,name:'varun'},{id:3,name:'sriram'}];
// arr.forEach(element => {
//     console.log(element.id+ ' ' +element.name);
// })