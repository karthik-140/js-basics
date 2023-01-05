let multiply=function(x,y){
    console.log(x*y);
}
 let multiplyByTwo=multiply.bind(this,2);
multiplyByTwo(2);

let mul=multiply.bind(this,3);
mul(3);

let product=function(x){
    return function(y){
        console.log(x*y);
    }
}
let pro=product(5);
pro(5);