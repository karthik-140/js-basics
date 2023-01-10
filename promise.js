const posts=[
    {title:'post one',body:'this is post one',lastActive:new Date().getTime()},
    {title:'post two',body:'this is post two',lastActive:new Date().getTime()}
]

function getPosts(){
    let output='';
    setTimeout(()=>{
        posts.forEach(post =>{
            output=output+`<li>${post.title} ${new Date().getTime() - post.lastActive}</li>`
        })
        document.body.innerHTML=output;
    },1000)
}
//getPosts();

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post,lastActive:new Date().getTime()});
            const error=false;
            if(!error){
                resolve(posts);
            }else{
                reject('Error:Cant create post');
            }
        },1000)
    })
}
//createPost({title:'post three',body:'this is post three'}).then(getPosts()).catch(err=> console.log(err))

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
// deletePost().then(()=>getPosts()).catch(err => console.log(err))
// deletePost().then(()=>getPosts()).catch(err => console.log(err))
// deletePost().then(()=>getPosts()).catch(err => console.log(err))

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
// createPostFour({title:'post four',body:'this is post four'}).then(getPosts()).catch(err=>console.log(err))
// deletePost().then(()=>getPosts()).catch(err=>console.log(err))

const promise1=Promise.resolve('Hello world')
const promise2=50
const promise3=new Promise((resolve,reject)=>setTimeout(resolve,2000,'Goodbye'))
Promise.all([promise1,promise2,promise3]).then(values=>console.log(values))

const user={
    lastActive:new Date().getTime()
}
function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            user.lastActive=new Date().getTime()
            resolve(user.lastActive);
            reject('Error');
        })
    })
}
Promise.all([createPost({title:'post three',body:'this is post three'}),updateLastUserActivityTime()])
.then((print)=> {
    getPosts()
   deletePost().then(()=>{getPosts()})
   console.log(print)
})

/*Why on Earth do we need promise.all?
=> we need Promise.all because it saves a lot of time while executing callback functions*/

/*Write a short answer on callback vs promises. 
=> callbacks take alot of time for executing the code compared to promises.
As the name itself callback will call the functions one after the other for executing the code.
=> Whereas, in promises functions gets called simultaneously and 
excution of code happens in very less time compared to callback functions.
*/