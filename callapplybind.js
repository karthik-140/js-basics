const obj={num:2};

const addnum=function(a,b,c){
    return this.num + a+b+c;
}

console.log("call function:-  "+addnum.call(obj,3,4,5));

const arr=[2,4,6];
console.log("apply function:- "+addnum.apply(obj,arr));


const bound=addnum.bind(obj);
console.log("bind function:-  "+bound(3,5,4));
