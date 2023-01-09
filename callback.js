const posts=[
    {title:'post one',body:'this is post one',createdAt:new Date().getTime()},
    {title:'post two',body:'this is post two',createdAt:new Date().getTime()}
]
function displayPost(){
    setInterval(() =>{
        let output='';
        setTimeout(() => {
            posts.forEach((post) => {
               output=output+`<li>${post.title} logged in ${(new Date().getTime() - post.createdAt)/1000}</li>`
            })
            document.body.innerHTML=output;
        },1000);
    })
}
displayPost();
function createPost(post,callback){
    setTimeout(() =>{
        posts.push({...post,createdAt:new Date().getTime()});
        callback();
    },2000);
}
createPost({title:'post three',body:'this is post three'},displayPost);
function createPostFour(post,callback){
    setTimeout(()=>{
        posts.push({...post,createdAt:new Date().getTime()});
        callback();
    },3000);
}
createPostFour({title:'post four',body:'this is post four'},displayPost);