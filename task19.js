class user{
    constructor(name,email,password){
        this.name=name;
        this.email=email;
        this.password=password;
        user.registeredusers++;
        this.membership=new Date();
    }
    static countusers(){
        console.log('Total number of users registered: '+user.registeredusers);
    }
  registereduser(){
    console.log(this.name+' is registered');
    console.log(this.membership);
  }
}

class member extends user{
    constructor(name,email,password,memberpackage){
        super(name,email,password)
        this.package=memberpackage;
        
    }
    getpackage(){
        console.log(this.name+' is registered to '+this.package+' package');
    }
    renewmembership(){
        console.log('Validity :-');
        if(this.package=='standard'){
         console.log(this.membership.getMonth()+1);
        }
        else{
         console.log(this.membership.getFullYear()+1);
        }
       }
}
user.registeredusers=0;


const ram=new member('ram','ram@gmail.com',1234,'yearly');
ram.registereduser();
ram.getpackage();
ram.renewmembership();

const sethu=new member('sethu','sethu@gmail.com',1542,'standard');
sethu.registereduser();
sethu.getpackage();
sethu.renewmembership();

user.countusers();

