var users = ["nency","khushi","gam","tirth","rahul","tejash","krishna","pramod"]


// const deleteuser = (name)=>{

//     var ans = users.filter((user)=>{
//         return user!= name
//     })

//     return ans

// }


// const deleteuser = (name)=>{

//     return users.filter((user)=>{
//         return user!=name;
//     })

// }

// const deleteuser = (name)=>{

//     return users.filter((user)=> user!=name)

// }

const deleteuser = (name)=> users.filter((user)=> user!=name)



var fname = "tirth"
var x = deleteuser(fname)
console.log(x);



var demo = ()=>{

}

