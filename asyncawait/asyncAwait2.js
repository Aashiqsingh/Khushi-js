const order = ()=>{

    console.log("order is about to placed...");

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                message:"order placed successfully",
                orderId: 402,
                customerId: 101,
                amount:456
            })
        },3000)
    })
    
}

const payment = (option)=>{

    console.log("payment is processing...");

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve({
                   message:"payment successfully...",
                paymentId:option.orderId,
                amount:option.amount
            })
        },4000)
    })
}


const collect = async()=>{

    var x = await order()
    console.log("collect is processing...",x);

    var y = await payment(x)
    console.log(y);
    
    
    console.log("Ending process,...");
    
}

collect()







// order().then((data)=>{
//     console.log("order received",data);

//     payment(data).then((res)=>{
//         console.log("payemnt received",res);
        
//     }).catch((error)=>{
//         console.log("payment rejected",error);
//     })
    
// }).catch((err)=>{
//     console.log("order rejected",err);
    
// })
