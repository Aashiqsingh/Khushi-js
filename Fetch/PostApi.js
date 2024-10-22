// const postData = async()=>{

//     const response = await fetch("https://node5.onrender.com/user/user/",{
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             name:"Khushi",
//             email:"khushi@gmail.com",
//             age:20,
//             isActive:true
//         })
//     })

//     const res = await response.json();;
//     console.log(res);
//     // console.log(response);
    
// }

const postData = async()=>{

    var data = {
        name:"nency",
        email:"nency@gmail.com",
        age:22,
        isActive:true
    }

    const response = await fetch("https://node5.onrender.com/user/user/",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    // console.log(response);
    
    if(response.status === 201){
        alert("Data sent successfully..")
    }

    const res = await response.json();;
    console.log(res.data);
    // console.log(response);
    
}