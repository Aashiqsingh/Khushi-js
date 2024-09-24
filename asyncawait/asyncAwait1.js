// const getData = ()=>{


//     var promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve({
//                 message:"Data fetched successfully..."
//             })
//         },3000)
//     })

//     return promise
// }

// getData().then((data)=>{
//     console.log(data.message)
// }).catch((error)=>{
//     console.error("Error fetching data:",error)
// })



const getData = ()=>{

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                message:"Data fetched successfully..."
            })
            // reject({message:"data fetched failed...."})
        },3000)
    })
}

async function getAns(){

    var x = await getData()
    console.log(x);


    console.log("Ending the fetching data...");

}

getAns()