

// for(let i=0;i<5;i++){
//     console.log("Hello world...");
// }

// var num = parseInt(prompt("Enter the number"))

// for(let i=1;i<=10;i++){

//     console.log(num + "*" + i + "="+ num*i);
// }

// for(let i=0;i<5;i++){
//     console.log("*");
// }


var num = 17;
var flag = 0;

for(var i=2;i<num/2;i++){

    if(num%i==0){
        flag = 1
    }
}

if(flag == 0){
    console.log("Prime number ");
}
else{
    console.log("Not prime number...");
}