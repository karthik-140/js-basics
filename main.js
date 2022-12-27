const btn=document.querySelector('.btn');

btn.addEventListener('click', (e) => {
      e.preventDefault();
    document.querySelector('#my-form').style.background='gray';

    document.querySelector('body').style.background="pink";
});

btn.addEventListener('mouseover', (e)=> {
     document.querySelector('h1').style.background='orange';
});
btn.addEventListener('mouseout', (e) => {
    document.querySelector('h1').style.color='green';
})



const myform=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');
myform.addEventListener('submit', onsubmit);
function onsubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML='Please fill the fields';
        setTimeout(() => msg.remove(),3000); 
    }
    else{
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        nameInput.value='';
        emailInput.value='';
    }
}