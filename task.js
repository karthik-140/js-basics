var form=document.getElementById('my-form');
form.addEventListener('submit', onsubmit);
function onsubmit(e){
    e.preventDefault();
    var name=e.target.name.value;
    var email=e.target.email.value;
    var obj={
        name,email
    };
   localStorage.setItem(obj.email,JSON.stringify(obj));
   showUserDetailsOnScreen(obj);
}

window.addEventListener("DOMContentLoaded", () =>{
    var localStorageObj=localStorage;
    var localStorageKeys=Object.keys(localStorageObj);
    for(var i=0;i<localStorageKeys.length;i++){
        var key=localStorageKeys[i];
        var userDetailsString=localStorageObj[key];
        var userDetailsObj=JSON.parse(userDetailsString);
        showUserDetailsOnScreen(userDetailsObj);
    }
})

function showUserDetailsOnScreen(user){
    document.getElementById('name').value='';
    document.getElementById('email').value='';
    if(localStorage.getItem(email!=null)){
         removeUserDetailsFromScreen(email);
    }
    var parentNode=document.getElementById('users');
    var childNode=`<li id=${user.email}>${user.name} - ${user.email}
                   <button onclick=deleteUser('${user.email}') style="float:right; padding:5px; margin-left:5px;">Delete</button>  
                   <button onclick=editUser('${user.name}','${user.email}') style="float:right; padding:5px;">Edit</button>       
                        </li>`
    parentNode.innerHTML=parentNode.innerHTML+childNode;
    
}

function editUser(name,email){
    document.getElementById('name').value=name;
    document.getElementById('email').value=email;
    deleteUser(email);
}

function deleteUser(email){
    localStorage.removeItem(email);
    removeUserDetailsFromScreen(email);
}

function removeUserDetailsFromScreen(email){
    var parentNode=document.getElementById('users');
    var childNode=document.getElementById(email);
    parentNode.removeChild(childNode);
}
 