const posts=[
    {title:'post one',body:'this is post one',lastActive:new Date().getTime()},
    {title:'post two',body:'this is post two',lastActive:new Date().getTime()}
]

function getPosts(){
    let output='';
    setTimeout(()=>{
        posts.forEach(post =>{
            output=output+`<li>${post.title} ${(new Date().getTime() - post.lastActive)/1000}</li>`
        })
        document.body.innerHTML=output;
    },1000)
}
//getPosts();
const postawait=async()=>{

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
    createPost({title:'post three',body:'this is post three'})
    .then(getPosts())
    .catch(err=> console.log(err))
    let create=await createPost()
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

    let dele=await deletePost()
   function createPostFour(post){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                posts.push({...post,lastActive:new Date().getTime()})
                const error=false
                if(!error){
                    resolve()
                }else{
                    reject('Error:Cant create post four')
                }
            },1000)
        })
    }
    createPostFour({title:'post four',body:'this is post four'})
    .then(getPosts())
    .catch((e)=>console.log(e))
    let cretfour=await createPostFour()
    return create;
}
postawait().then((c)=> console.log(c))


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
// Promise.all([createPost({title:'post three',body:'this is post three'}),updateLastUserActivityTime()])
// .then((print)=> {
//     getPosts()
//    deletePost().then(()=>{getPosts()})
//    console.log(print)
// })
