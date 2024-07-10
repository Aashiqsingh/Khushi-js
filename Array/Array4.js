var users = ["nency", "khushi", "gamaa", "tirtht", "rahul", "tejash", "krishna", "pramod"]

// var flag = true;
// for(let i=0;i<users.length;i++){

//     if(users[i].length < 3){
//         flag = false;
//         break;
//     }
// }
// console.log(flag);


// var x = users.every((u)=>{
//     return u.length >= 3
// })

// console.log(x);

// var y = users.every((user)=> user.includes("t"))
// console.log(y);


// var x = users.every((user)=>{
//     return user.length > 4
// })

// console.log(x);

var x = users.every((user) => user.startsWith("n"))
console.log(x);


var y = users.some((user) => user.endsWith("t"))
console.log(y);