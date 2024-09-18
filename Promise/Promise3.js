const getData = ()=>{

    var age = 23;
    var promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{

            if(age > 18)
            {
                resolve("You select to go to army..")
            }
            else{
                reject("Sry your age is must small..");
            }
            
        },4000)
    })
    
    console.log(promise);

    return promise
    

}

getData().then((data)=>{
    console.log(data);
    
}).catch((err)=>{
    console.log(err);
 
})


// var x = getData()
// x.then((data)=>{
//     console.log(data);
    
// })
// x.catch((error)=>{
//     console.log(error);
    
// })