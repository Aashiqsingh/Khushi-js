var users = ["nency","khushi","gam","tirth","rahul","tejash","krishna","pramod"]


// for(let i=0;i<users.length;i++){

//     console.log(users[i]);
// }


// users.forEach((u)=>{
//     console.log(u);
// })



// map --> it will return new array with same length 

var x = users.map((u)=>{

    return u.toUpperCase()
})
console.log(x);