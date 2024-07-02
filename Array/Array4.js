var users = ["nentcy","khusthi","gatm","tirth","rahtul","tejashty","kristhna","pramod"]

// var flag = true;
// for(let i=0;i<users.length;i++){

//     if(users[i].length < 3){
//         flag = false;
//         break;
//     }
// }
// console.log(flag);


var x = users.every((u)=>{
    return u.length >= 3
})

console.log(x);

var y = users.every((user)=> user.includes("t"))
console.log(y);