console.log('person1 shows ticket')
console.log('person2 shows ticket')

const promiseWifeBringsTicket=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('ticket')
    },1000)
})
const getPopCorn=promiseWifeBringsTicket.then((t)=> {
console.log('wife:i have ticket')    
console.log('husband:we should go in')
console.log('wife:no i am hungry')
return new Promise((resolve,reject)=> resolve(`${t} popcorn`))
})
const getButter=getPopCorn.then((t)=> {
    console.log('husband:i have popcorn')
    console.log('husband:we should go in')
    console.log('wife:I need butter on my popcorn')
    return new Promise((resolve,reject)=> resolve(`${t} butter`))
})
const getCoolDrinks=getButter.then((t)=>{
    console.log('husband:i have butter')
    console.log('wife:i need CoolDrinks')
    console.log('husband:done lets go now!!')
    return new Promise((resolve,reject)=>resolve(`${t} coolDrinks`))
   
})

getCoolDrinks.then((t)=> console.log(t))

console.log('person4 shows ticket')
console.log('person5 shows ticket')