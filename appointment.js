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

    axios.post("https://crudcrud.com/api/99d16bd2e537473e80dd9fe0778ed5b6/appointmentdata",obj)
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

     axios.get("https://crudcrud.com/api/99d16bd2e537473e80dd9fe0778ed5b6/appointmentdata")
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
    const childHTML= `<li id=${user.Email}>${user.name} - ${user.Email}
                  <button onclick=deleteUser('${user._id}') style="float:right; margin-left:5px;">Delete</button>
                  <button onclick=editUser('${user.Email}','${user.name}') style="float:right;">Edit</button>
                   </li>`
parentNode.innerHTML=parentNode.innerHTML+childHTML
}
function editUser(email,name){
    document.getElementById('email').value=email;
    document.getElementById('name').value=name;
    deleteUser(email);
 }
function deleteUser(email){
    axios.delete(`https://crudcrud.com/api/99d16bd2e537473e80dd9fe0778ed5b6/appointmentdata/${email}`)
    .then((response)=>{
        removeUserFromScreen(email);
        console.log(response);
    })
    .catch((err)=>{
        console.log(err)
    });
    // localStorage.removeItem(email);
}
function removeUserFromScreen(email){
   const parentNode=document.getElementById('users');
   const removeChildNode=document.getElementById(email);
   if(removeChildNode){
    parentNode.removeChild(removeChildNode);
   }
   
}
