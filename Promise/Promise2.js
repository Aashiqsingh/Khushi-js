const ola = ()=>{

    console.log("find the cab is processing...");

    var promise = new Promise((success,failure)=>{

        setTimeout(()=>{
            // success({message:"Ola cab is accepting the request..",DOJ:"18/9/2024"})
            success({
                message:"Ola cab is accepting the request..",
                DOJ:"18/9/2024",
            })
        },3000)
    })
    

    promise.then((data)=>{
        console.log("cab booking successfully...",data);
        
    })
    promise.catch((error)=>{
        console.log("Failed to book cab... ",error);
    })

}

ola();