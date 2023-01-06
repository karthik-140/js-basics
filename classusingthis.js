class student{
    constructor(name,age,phno,marks){
        this.name=name;
        this.age=age;
        this.phno=phno;
        this.marks=marks;
        student.count++;
    }
    static countUsers(){
        console.log("Total no. of students = "+student.count++);
    }
    show(){
       console.log(`${this.name} - ${this.age} - ${this.phno} -${this.marks}`);
    }
    eligibility(){
        if(this.marks>=40){
            console.log(`${this.name} - is eligible`);
        }
        else{
            console.log(`${this.name} - is not eligible`);
        }
    }
}
student.count=0
const user1=new student('karthik',22,'9743632461',80);
const user2=new student('tharun',23,'8666444774',30);
const user3=new student('vamshi',21,'8999777711',60);
const user4=new student('omkar',24,'9888755567',35);
const user5=new student('roman',25,'6723468534',50);
user1.eligibility();
user2.eligibility();
user3.eligibility();
user4.eligibility();
user5.eligibility();
student.countUsers();