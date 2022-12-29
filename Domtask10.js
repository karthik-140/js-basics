var form=document.getElementById('my-form');
form.addEventListener('submit', onsubmit);
function onsubmit(e){
    e.preventDefault();

    const ans={
        name:e.target.name.value,
        Email:e.target.email.value
    };

            // var name=JSON.stringify(e.target.name.value);
            // var Email=JSON.stringify(e.target.email.value);

            //  localStorage.setItem('user1Name',name);
            //  localStorage.setItem('user1Email',Email);   
    
    var json=JSON.stringify(ans);
            //console.log(json);

    localStorage.setItem('name',json);
            // // console.log(localStorage);

            // var jsonp=JSON.parse(localStorage.getItem('name'));
            // console.log(jsonp);
        }