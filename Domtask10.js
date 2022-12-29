var form=document.getElementById('my-form');
form.addEventListener('submit', onsubmit);
function onsubmit(e){
    e.preventDefault();

    const ans={
        name:e.target.name.value,
        Email:e.target.email.value
    };  
    var json=JSON.stringify(ans);
    localStorage.setItem(ans.Email,json);
    
    

    var showuser=document.querySelector('.container');
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(json));

    showuser.appendChild(li);
          
        }
        

      