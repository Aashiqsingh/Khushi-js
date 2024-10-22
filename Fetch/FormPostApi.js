const PostData = async()=>{


    var name = document.getElementById('name')
    var email = document.getElementById('email')
    var age = document.getElementById('age')
    var status = document.getElementsByName('status')
    var xyz;
    if(status[0].checked === true){
        xyz = true;
    }
    else{
        xyz = false;
    }

    const response = await fetch("https://node5.onrender.com/user/user/",{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name:name.value,
            email:email.value,
            age:age.value,
            isActive: xyz
        })
    })


    if(response.status === 201){
        alert("user added successfully..")
    }

    const res = await response.json()
    console.log(res.data);
    



}