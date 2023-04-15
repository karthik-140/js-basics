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

// class student{
//     constructor(name,age,marks){
//         this.name=name;
//         this.age=age;
//         this.marks=marks;
//         student.count++;
//     }
//     static countStudents(){
//         console.log(student.count++);
//     }
//     eligible(){
//         if(this.marks>=40){
//             console.log("Eligible");
//         }else{
//             console.log("Not Eligible");
//         }
//     }
// }
// student.count=0;
// const karthik=new student("karthik",22,60);
// karthik.eligible();
// const vamshi=new student("vamshi",20,56);
// vamshi.eligible();
// const kiran=new student("kiran",16,20);
// kiran.eligible();

// student.countStudents();


// const arr1 = [1, 2, 3]
// const arr2 = [3,5,6]
// const arr3 = [...arr1, ...arr2]
// console.log(arr3)


// console.log("a")
// console.log("b")
// async function df(){
//    try {
//     await setTimeout(console.log("d"),1000);
//     }catch(err){
//        console.log(err)
//     }
// } 
// async function ef(){
//     try{
//         await setTimeout(console.log("e"),0);
//     }catch(err){
//         console.log(err)
//     }
// }
// df();
// ef();
// console.log("c")


// INTERVIEW PREPARARION STARTS..................................................................................

//SET - 1  -- 2
// function sample (){

//     for (let i=0; i<=5;i++){

//     setTimeout (() => console.log(i), 1000 );

//     }

//     }
// sample();

//SET - 1 --3
// setTimeout( ()=>{
//   console.log("a");
//     },2000)
//     console.log("b") 

// const arr = "jksdh"
// const ans = Array.isArray(arr);
// console.log(ans)
// setImmediate (()=>{
//     console.log("first")
//     })
//     setTimeout (()=>{
//     console.log("second")
//     })
//     console.log("third");
// let a=New Promise((resolve,reject)=>{
//     reject ({ msg: 'Something went wrong' ))
//     })
//     a.then(ressolve=>{console.log{ressolve}}).catch(err=>{console.log(err.msg) })
// let a = new Promise((resolve,reject) =>{
//     reject ({msg: "jksdf"});
// })
// a.then(resolve => {
//     console.log("console")
// }).catch((err) =>{
//     console.log(err.msg);
// })
//  await delay(6000)
// setTimeout (()=>{
// console.log("first")
// },10000)
// console.log("second");
// function greet(name) {
//     console.log(`Hello, ${name}!`);
//   }
//   greet("karthik")


// let a = 1;
// function abc() {
//     a=5
//     console.log(a);
// }
// abc();
// console.log(a);
// var a = 10;


// const arr = [1,2,3,4,5,6,7,8,9,10];
// const filter = arr.filter((num) => num % 2 === 0 )

// console.log(filter);

// const obj = {
//     name: "karthik",
//     age: 22,
//     sex: "male"
// }
// const objLength = Object.keys(obj).length;
// console.log(objLength);

// async function fun1() {
//     console.log('a');
//     console.log('b');
//     await new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('c'), 1000
//             resolve();
//         })
//     });

//     await new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('d');
//             resolve();
//         }, 0);
//     })

//     console.log('e');
// }
// fun1()


// const array = [1,2,3];

// //.forEach
// array.forEach((num) =>{
//     console.log(num * 2) ;
// })

// //.map
// const map = array.map((num) =>{
//     return (num  + 1)
// })
// console.log(map);

// //.filter
// const filter =array.filter((num) => num === 2);
// console.log(filter);

// const array = [6,2,4,3,5];
// const reducer = array.reduce((cons, acc) =>{
//      return cons + acc;
// },0)
// console.log(reducer);


// let user = {
//     name: "karthik",
//     user1:() => {
//         console.log("hello " + this.name); // hello
//     },
//     user2(){   
//         console.log("Welcome " + this.name); // Welcome karthik
//     }
// };
// user.user1();
// user.user2();


// const obj = {
//     name: "karthik",
//     age: 22,
//     sex: "male",
// }

// for(let key in obj){
//     console.log(obj[key]);
// }

// const obj = (num) =>{
//     return num * num;
// }

// const value = 10;
// obj(value);
// console.log(obj(value));
// console.log(value);


// const reference = (num) =>{
//    num.age++;
// }
// const newObj = {age: 22};
// reference(newObj);
// console.log(newObj.age);

// function fibonacci(n, cache = {}) {
//     if (n in cache) {
//       return cache[n];
//     }

//     if (n <= 1) {
//       return n;
//     }

//     const result = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
//     cache[n] = result;
//     return result;
//   }
//   console.log(fibonacci(10));

// const radius = [3,5,6,2];

// const area = (radius) =>{
//     return Math.PI * radius * radius
// }

// const circumference = (radius) =>{
//     return  2 * Math.PI * radius
// }

// const diameter = (radius) =>{
//     return 2 * radius;
// }

// const calculate = (logic) =>{
//     output = [];
//     for(let i=0;i<radius.length;i++){
//         output.push(logic(radius[i]));
//     } 
//     return output;
// }


// console.log(calculate( area))
// console.log(calculate(circumference));
// console.log(calculate( diameter));

// const calculateArea = (arr) =>{
//     output = [];
//     for(let i=0; i<arr.length;i++){
//         output.push((Math.PI * arr[i] * arr[i]));
//     }
//     return output;
// }
// console.log(calculateArea(radius));

// const radius = [2,5,3,4];

// const area = (radius) =>{
//     return Math.PI * radius * radius;
// }
// const circumference = (radius) =>{
//     return 2 * Math.PI * radius;
// }
// const diameter = (radius) =>{
//     return 2 * radius;
// }

// const calculate = (arr, logic) =>{
//     output = [];
//     for(let i = 0;i< arr.length; i++){
//         output.push(logic(arr[i]))
//     }
//     return output;
// }

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));

// const objArr = [
//     {name: 'jad'},
//     {age:22},
//     {place:"jhgad"}
// ]
// for(let i of objArr){
//     console.log(i); 
//     for(let y in i){
//         console.log(i[y])
//     }
// }
// const [a,b,c] = objArr;
// console.log(c)

// const obj={name:'kar',age:22,sex:"male"};
// const data =Object.values(obj);
// console.log(data)

// function callback(){
//    console.log("callbacked");
// }

// function abc(callback){
//     callback();
// }

// const obj ={name:"karthik", age: 22, place: "xyz"};

// const objLength=Object.keys(obj).length
// console.log(objLength);

// async function fun1(){
//     console.log('a');
//     console.log('b');
//     await new Promise((resolve) =>{
//          setTimeout(() => {
//             console.log('c')
//             resolve();
//          }, 1000)

//     })

//     await new Promise((resolve) =>{
//         setTimeout(() => (console.log('d'), resolve()), 0)

//     })


//     console.log('e');
// }
// fun1()

// async function abc(){
//     await new Promise((resolve) =>{
//         setTimeout(() => {
//              console.log("a");
//              resolve();
//          }, 2000)
//     }) 
//     console.log("b");
// }

// abc();

// const obj = {
//     age: 22
// }

// function fun(a,b) {
//    console.log( this.age + a+b);
// }

// fun.call(obj,2,5);

// const arr=[10,10];
// fun.apply(obj,arr);

// const check = fun.bind(obj);
// check(10,8);

// const arr=[1,5,3,4,6];
// const fil = arr.filter((num) => num !== 3);
// console.log(fil);
// const arr=[1,5,3,4];
// console.log(Array.isArray(arr))

// var a=[]
// console.log(a);

// const fun =(arg)=>{
//     return  (num) =>{
//         console.log(arg+num)
//     }
// }

// fun(12)(3);

// (function test(){
//     console.log("yes");
// })();

// const obj ={name:'ja', age: 22};

// function fun(name,age){
//     this.name=name;
//     this.age=age;
// }
// const jin=new fun("jin",22)
// const him=new fun("him",24)
// console.log(jin)
// console.log(him.name)

// class Something{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//         Something.count++;
//     }
//     static countUsers(){
//         console.log(Something.count++);
//     }
//     eligible(){
//         if(this.age>20){
//            console.log("eligible");
//         } else{
//            console.log("not eligible");
//         }
//    }
// }
// Something.count=0;
// const obj1=new Something("kar",22);
// obj1.eligible();

// Something.countUsers();

// let obj={
//     value:2,
//     increment(){
//         this.value++;
//         return this;
//     },
//     multiply: ()=>{
//         console.log(this.value * 2);
//         console.log(this)
//         return this;
//     },
//     print(){
//         console.log(this.value);
//     }

// }

// obj.increment().multiply().print();

// const obj = {name: "karthik",age:22,place: "xyz"};
// const arr=[{name:"jin",age:22},{name:"kar",age:15},{name:"vin",age:25}]
// // for(let i in obj){
// //     console.log(obj[i]);
// // }
// for(let i=0;i<arr.length;i++){
//     let keys = Object.keys(arr[i]);
//     console.log(keys)
// }

// const a=1+5.5;
// console.log(typeof(a) === 'number');
// console.log(isNaN("h"));
// console.log(String(""));

// const arr = [1,2,34];
// console.log(typeof(arr));
 


                                                                         // callback function

// function callback(){
//     console.log("callback executed");
// }

// function myfunction(data, callback){
//     console.log(data.name);
//     callback();
// }

// myfunction({name: "karthik"}, callback);


                                                                             // Promises

// const get = () =>{
//     console.log("get printed")
// }

// const comp = (data) =>{
//     return new Promise((resolve, reject) =>{
//        console.log(data.name);
//        resolve();
//     })
// }
// comp({name: "karthik"}).then(get()).catch((err) => console.log(err));

                                                                              //Call, apply, bind

// let obj = {age: 5};

// function component(a,b,c){
//     console.log(this.age +a+b+c);
// }

// component.call(obj,5,2,3)

// const arr=[1,2,3]
// component.apply(obj,arr);

// const bound=component.bind(obj);
// bound(5,5,5);

                                                                           //currying
// const component = (a) => {
//     return (b)=>{
//         return (c) =>{
//             console.log((a*b) + c);
//         }
//     }
// }

// component(5)(5)(5);

                                                                      // Insertion sort
// const arr=[5,3,8,4,2];

// for(let i=1;i<arr.length;i++){
//     let temp=arr[i];
//     let j=i+1;
//     while(j>=0 && temp<arr[j]){
//         arr[j+1]=arr[j];
//         j=j-1;
//     }
//     arr[j+1]=temp;
// }
// console.log(arr);

                                                                    // Selection sort
// const arr=[5,3,8,4,2,1,9,7,6,10];

// for(let i=0;i<arr.length-1;i++){
//     let index=i;
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[j]<arr[index]){
//             index=j;
//         }
//     }
//     let temp=arr[i];
//     arr[i]=arr[index];
//     arr[index]=temp;
// }
// console.log(arr);

                                                                     //  Merge Sort
// const arr=[5,3,8,4,2,1,9,7,6,10];

// function mergeSort(arr){
//     let n=arr.length;
//     if(n<=1){
//         return arr;
//     }
//     let mid=Math.floor(n/2);
//     let left=mergeSort(arr.slice(0,mid));
//     let right=mergeSort(arr.slice(mid));
//     return merge(left, right);
// }

// function merge(left, right){
//     let result = [];
//     let i=0;
//     let j=0;
//     while(i<left.length && j<right.length){
//         if(left[i]<right[j]){
//             result.push(left[i]);
//             i++;
//         }else{
//             result.push(right[j]);
//             j++;
//         }
//     }
//     return result.concat(left.slice(i)).concat(right.slice(j));
// }

// console.log(mergeSort(arr));


                                                                        // Quick Sort
// const arr=[5,3,8,4,2,1,9,7,6,10];

// function quickSort(arr){
//     let n=arr.length;
//     if(n<=1){
//         return arr;
//     }
//     let pivotIndex=Math.floor(n/2);
//     let pivotValue=arr[pivotIndex];
//     let left=[];
//     let right=[];
    
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] === pivotValue){
//             continue;
//         }
//         if(arr[i] < pivotValue){
//            left.push(arr[i]);
//         }else{
//             right.push(arr[i]);
//         }
//     }
//     return [...quickSort(left), pivotValue, ...quickSort(right)];
// }

// console.log(quickSort(arr));