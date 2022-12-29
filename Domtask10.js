var form=document.getElementById('my-form');
form.addEventListener('submit', onsubmit);
function onsubmit(e){
    e.preventDefault();

    const name=e.target.name.value;
    const Email=e.target.email.value;
    const ans=`{
        ${name},
        ${Email}
    };`
    var json=JSON.stringify(ans);
    localStorage.setItem(Email,json);
    
    

    var showuser=document.querySelector('.container');
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(name+" "+Email));

    showuser.appendChild(li);
          
        }
        

      