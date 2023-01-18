var form=document.getElementById('my-form');
form.addEventListener('submit', onsubmit);
function onsubmit(e){
    e.preventDefault();

    const name=e.target.name.value;
    const Email=e.target.email.value;
    const obj={
          name,
         Email
    };
    //var json=JSON.stringify(obj);

    axios.post("https://crudcrud.com/api/84e6596a7edf4913be57413d763b31ec/appointmentdata",obj)
    .then((response)=>{
        showNewUserOnScreen(response.data)
        console.log(response);
    })
    .catch((err)=>{
        document.body.innerHTML+="<h4>Something went wrong</h4>"
        console.log(err)
    });

    // localStorage.setItem(obj.Email,JSON.stringify(obj));
    // showNewUserOnScreen(obj);

}
window.addEventListener("DOMContentLoaded", () => {

     axios.get("https://crudcrud.com/api/84e6596a7edf4913be57413d763b31ec/appointmentdata")
     .then((response)=>{
        console.log(response)

        for(var i=0;i<response.data.length;i++){
            showNewUserOnScreen(response.data[i]);
        }
     })
     .catch((err)=>{
        console.log(err)
     })


    // const localStorageObj = localStorage;
    // const localstoragekeys  = Object.keys(localStorageObj)

    // for(var i =0; i< localstoragekeys.length; i++){
    //     const key = localstoragekeys[i]
    //     const userDetailsString = localStorageObj[key];
    //     const userDetailsObj = JSON.parse(userDetailsString);
    //     showNewUserOnScreen(userDetailsObj)
    // }
})

function showNewUserOnScreen(user){
    document.getElementById('email').value = '';
    document.getElementById('name').value = '';
       if(localStorage.getItem(user.Email!==null)){
       removeUserFromScreen(user.Email);
    }  
    const parentNode=document.getElementById('users');
    const childHTML= `<li id=${user._id}>${user.name} - ${user.Email}
                  <button onclick=deleteUser('${user._id}') style="float:right; margin-left:5px;">Delete</button>
                  <button onclick=editUser('${user.name}','${user.Email}','${user._id}') style="float:right;">Edit</button>
                   </li>`
parentNode.innerHTML=parentNode.innerHTML+childHTML
}
function editUser(name,email,_id){
    document.getElementById('name').value=name;
    document.getElementById('email').value=email;
    axios.put("https://crudcrud.com/api/84e6596a7edf4913be57413d763b31ec/appointmentdata/"+_id,{
        'name':document.getElementById('name').value,
        'email':document.getElementById('email').value
    })
    .then((response)=>{
        deleteUser(_id);
        console.log(response);
    })
    .catch(err=>console.log(err))
 }
function deleteUser(_id){
  // console.log(_id)
    axios.delete(`https://crudcrud.com/api/84e6596a7edf4913be57413d763b31ec/appointmentdata/${_id}`)
    .then((response)=>{
        removeUserFromScreen(_id);
        console.log(response);
    })
    .catch((err)=>{
        console.log(err)
    });
    // localStorage.removeItem(email);
}
function removeUserFromScreen(_id){
   const parentNode=document.getElementById('users');
   const removeChildNode=document.getElementById(_id);
  // console.log(removeChildNode)
   if(removeChildNode){
   // console.log(`check`,removeChildNode)
    parentNode.removeChild(removeChildNode);
   }
   
}
