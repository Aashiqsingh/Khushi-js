// var student = ["ram","krishna","okkk"]
// var employee = {
//     name:"student1",

// }


var products = [
    {
        id:201,
        name:"Iphone",
        price: 89000,
        isAvailable: true,
        color:["red","white","green","yellow"],
        ram:"8gb"
    },
    {
        id:202,
        name:"Samsung",
        price: 69000,
        isAvailable: false,
        color:["black","blue","gray","white"],
        ram:"4gb"
    },
    {
        id:203,
        name:"laptop",
        price: 129000,
        isAvailable: true,
        color:["black","blue","gray"],
        ram:"16gb"
    }
]

var x = products.filter((prod)=>{
    return prod.color.includes("black")
})
console.log(x);

// sum = 0
// products.forEach((prod)=>{

//     sum += prod.price
// })
// console.log(sum);

// reduce : itt will return only one value 

// var x = products.reduce((sum,prod)=>{

//     return sum + prod.price
// },0)
// console.log(x);

var x = products.reduce((sum,prod)=> sum + prod.price,0)
console.log(x);



// console.log(products);

// var x =products.filter((prod)=>{
//     return prod.price > 70000
// })

// console.log(x);
// console.log(products);


// products = products.filter((prod)=>{

//     return prod.price > 70000
// })
// console.log(products);


