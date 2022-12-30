const form=document.getElementById('my-form');
form.addEventListener('submit', onsubmit);
function onsubmit(e){
    e.preventDefault();
    const name=e.target.name.value;
    const email=e.target.email.value;
    const obj={
        name,email
    }
    localStorage.setItem(obj.email,JSON.stringify(obj));
    //console.log(localStorage);
    showNewUserOnScreen(obj);
}

window.addEventListener("DOMContentLoaded", () => {
    const localStorageObj=localStorage;
    const localStorageKeys=Object.keys(localStorageObj);
    for(var i=0;i<localStorageKeys.length;i++){
        const key=localStorageKeys[i];
        const userDetailsString=localStorageObj[key];
        const userDetailsObj=JSON.parse(userDetailsString);
        showNewUserOnScreen(userDetailsObj);
    }
})

function showNewUserOnScreen(user){
   document.getElementById('name').value='';
   document.getElementById('email').value='';
   //document.getElementById('email').value='-';
   if(localStorage.getItem(email)!==null){
    removeUserFromScreen(email);
   }
    const parentNode=document.getElementById('users');
    const childNode=`<li id=${user.email}>${user.name} - ${user.email}
                    <button onclick=deleteUser('${user.email}') style="float:right; margin-left:5px;">Delete</button>   
                    <button onclick=editUser('${user.email}','${user.name}') style="float:right;">Edit</button>
                   </li>`
    parentNode.innerHTML=parentNode.innerHTML+childNode;
}

function editUser(email,name){
    document.getElementById('name').value=name;
    document.getElementById('email').value=email;
    deleteUser(email);
}

function deleteUser(email){
    
       localStorage.removeItem(email);
       removeUserFromScreen(email);
       
}

function removeUserFromScreen(email){
       const parentNode=document.getElementById('users');
       const childNode=document.getElementById(email);
       parentNode.removeChild(childNode);
       
}