var form=document.getElementById('my-form');
form.addEventListener('submit', onsubmit);
function onsubmit(e){
    e.preventDefault();

    var ans=e.target.name;
     localStorage.setItem('user1Name',ans.value);
     localStorage.setItem('user1Email',e.target.email.value);    
}