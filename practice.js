function onsignup(event){
    event.preventDefault();
    console.log(event.target.name.value);
}
const ans=document.querySelector('button');

const nameInput=document.querySelector('#name');
const email=document.querySelector('#email');
const pssd=document.querySelector('#password');
const msg=document.querySelector('.msg');

ans.addEventListener('click', (event) => {
    event.preventDefault();
     if(nameInput.value==='')
     {
        msg.classList.add('error');
        msg.innerHTML='Please fill the details';
     }
     else{
        msg.remove();
    document.querySelector('button').style.background='green';
     }
})