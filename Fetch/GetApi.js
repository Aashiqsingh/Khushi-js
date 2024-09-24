const getData = async()=>{

    var response =await fetch("https://node5.onrender.com/user/user/",{
        method:'GET'
    })

    console.log(response);

    const res = await response.json();
    console.log(res.data);


    // res.data.map((data)=>{
    //     console.log(data);
        
    // })
    
    
}
