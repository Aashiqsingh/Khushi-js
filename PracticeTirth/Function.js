
// without without
function demo(){

    console.log("Without return type without arguments");
}
demo()
// without with arguments

function add(a,b){
    console.log("Addition =",a+b);
}
add(3,4)

// with return type without arguments

function Demo2(){

    return "With return type without arguments"
}

// var x = Demo2()
// console.log(x);

console.log(Demo2());


// With With arguments

// function mul(x,y){
//     return "Multiply = "+x*y;
// }

// var x = mul(3,4)
// console.log(x);


function isEven(x){
    return x%2 === 0;
}

var x = isEven(7)
console.log(x);