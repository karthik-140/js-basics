const posts=[
    {title:'post one',body:'this is post one'},
    {title:'post two',body:'this is post two'}
]

function getPosts(){
    let output='';
    setTimeout(()=>{
        posts.forEach(post =>{
            output=output+`<li>${post.title}</li>`
        })
        document.body.innerHTML=output;
    },1000)
}
//getPosts();

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error=false;
            if(!error){
                resolve();
            }else{
                reject('Error:Cant create post');
            }
        },1000)
    })
}
createPost({title:'post three',body:'this is post three'}).then(getPosts()).catch(err=> console.log(err))

function deletePost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.pop(post)
            if(posts.length!=0){
                resolve()
            }else{
                reject('Error:cant delete post')
            }
        },2000)
    })
}
deletePost().then(()=>getPosts()).catch(err => console.log(err))
deletePost().then(()=>getPosts()).catch(err => console.log(err))
deletePost().then(()=>getPosts()).catch(err => console.log(err))

function createPostFour(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post)
            const error=false
            if(!error){
                resolve()
            }else{
                reject('Error:Cant create post four')
            }
        },1000)
    })
}
createPostFour({title:'post four',body:'this is post four'}).then(getPosts()).catch(err=>console.log(err))
deletePost().then(()=>getPosts()).catch(err=>console.log(err))