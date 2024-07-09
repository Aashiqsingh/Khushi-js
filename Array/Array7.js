var users = ["nency","khushi","gam","tirth","rahul","tejash","krishna","pramod"]

// filter -- it will return new array with modified data 

// var x = users.filter((user)=>{

//     return user.length < 4
// })

// console.log(x);



var deleteUser = "rahul"

var x = users.filter((user)=>{

    // nency
    // khushi
    // rahul
    return user != deleteUser
})

console.log(x);

