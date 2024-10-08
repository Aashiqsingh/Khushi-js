const order = ()=>{

    console.log("Order is about to be placed...");
    
    return promise = new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve({
                message:"Order is placed successfully..",
                orderId: 1456,
                amount:456
            });
            
        },3000)
    })

    


}


const payment = (option)=>{

    console.log("Amount is about to be payying...");

    return promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                message:"Payment is successful..",
                paymentId: option.orderId,
                amount:option.amount
            })
        },4000)
    })

    
 }
    

order().then((data)=>{
    console.log("data...",data);
    
    
    payment(data).then((res)=>{
        console.log("payement successful ...",res);
        
    }).catch((error)=>{
        console.log("payment failed ...",error);
        
    })

    console.log("ending the payment request...");
    
}).catch((err)=>{    
    console.log("order failed...",err);
    
})