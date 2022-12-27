function Person(firstname,lastname,dob){
    this.firstname=firstname;
    this.lastname=lastname;
    this.dob=new Date(dob);
    this.getBirthYear=function(){
        return this.dob.getFullYear();
    }
    this.getFullName=function(){
        return `${this.firstname}  ${this.lastname}`;
    }
}
const person1=new Person('john','deo','5-8-1980');
const person2=new Person('cat','catty','5-2-1995');

console.log(person2.dob.getFullYear());
console.log(person2.getFullName());