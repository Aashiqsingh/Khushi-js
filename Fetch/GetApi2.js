

const getData = async()=>{

    const res = await fetch("https://node5.onrender.com/user/user/",{
        method:"GET"
    })

    console.log(res);

    const response = await res.json();
    console.log(response.data);

    // response.data.forEach((data)=>{
    //     console.log(data);
        
    // })
    var tbody = document.getElementById("tbody");

    for(let i=0;i<response.data.length;i++){

        var tr = document.createElement("tr")
        var idTd = document.createElement("td");
        var nameTd = document.createElement("td");
        var emailTd = document.createElement("td");
        var ageTd = document.createElement("td");
        var statusTd = document.createElement("td");
        var btnTd = document.createElement("td");
        var btn = document.createElement("button");
        btn.innerHTML = "DELETE";

        



        idTd.innerHTML = response.data[i]._id;
        nameTd.innerHTML = response.data[i].name;
        emailTd.innerHTML = response.data[i].email;
        ageTd.innerHTML = response.data[i].age;
        statusTd.innerHTML = response.data[i].isActive;

        btn.addEventListener("click",async()=>{

            // alert("delete" + response.data[i]._id)

            const response2 = await fetch("https://node5.onrender.com/user/user/"+response.data[i]._id,{
                method:"DELETE",
                
            })

            console.log(response2);
            

            if(response2.status === 204){
                alert("User deleted successfully!!!")
                data()
            }
            
            

        })

        tbody.appendChild(tr)
        tr.appendChild(idTd)
        tr.appendChild(nameTd)
        tr.appendChild(emailTd)
        tr.appendChild(ageTd)
        tr.appendChild(statusTd)
        tr.appendChild(btnTd)
        btnTd.appendChild(btn);


    }
    

    
}

function data(){
    getData()  
}

getData()
