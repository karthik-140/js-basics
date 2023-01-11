//Async Await

console.log('person1 shows ticket')
console.log('person2 shows ticket')

// const preMovie=async()=> {
//     const promiseWifeBringsTicket=new Promise((resolve,reject)=>{
//             setTimeout(()=> resolve('ticket'),1000)
//            })
//            let ticket=await promiseWifeBringsTicket
//            return ticket
// }
//preMovie().then((m)=> console.log(m))
const preMovie=async () => {
    const promiseWifeBringsTicket=new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('ticket'),1000)
    })

    const getPopCorn=new Promise((resolve,reject)=>resolve('popcorn'))

    const getButter=new Promise((resolve,reject)=>resolve('butter'))

    const getCoolDrinks=new Promise((resolve,reject)=>resolve('coolDrinks'))

    let ticket =await promiseWifeBringsTicket
    console.log(`wife:i have ${ticket}`)
    console.log('husband:we should go in')
    console.log('wife:i am hungry')

    let popcorn=await getPopCorn
    console.log(`husband:i have ${popcorn}`)
    console.log('husband:we should go in')
    console.log('wife:I need butter on my popcorn')

    let butter=await getButter
    console.log(`husband:i got some ${butter} on popcorn`)
    console.log('husband:anything else Darling?')
    console.log(`wife:i need coolDrinks`)

    let coolDrinks=await getCoolDrinks
    console.log(`husband:i have ${coolDrinks}`)
    console.log('wife:lets go we are getting late')
    console.log('husband:thanks for the reminder *grins*')
    
    return ticket
}
preMovie().then((m)=>console.log(`person3 shows ${m}`))

console.log('person4 shows ticket')
console.log('person5 shows ticket')