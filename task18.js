class Student{
    constructor(firstname,lastname,rollno,age){
     this.firstname=firstname;
     this.lastname=lastname;
     this.rollno=rollno;
     this.age=age;
    
    }
    getFullName(){
        return `${this.firstname}${this.lastname}`;
    }
    minorOrmajor(){
        let ans;
     if(this.age>18)
     {
        ans='major';
     }
     else{
       ans='minor';
     }
     return ans;
    }
}

const Yash=new Student('yash','prasad',12,27);
const Ram=new Student('ram','prasad',14,15);

console.log(Yash.getFullName());
console.log(Yash.minorOrmajor());
console.log(Ram.getFullName());
console.log(Ram.minorOrmajor());
