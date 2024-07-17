var company = [
    {
        name:"Google",
        employees:[
            {
                id:1,
                name:"kavita",
                salary:30000,
                isMarried:false,
                age:21,
                gender:"female",
                child:0
            },
            {
                id:2,
                name:"prasanna",
                salary:25000,
                isMarried:true,
                age:25,
                gender:"female",
                child:1
            },
            {
                id:3,
                name:"rahul",
                salary:28000,
                isMarried:true,
                age:22,
                gender:"male",
                child:2
            }
        ]
    },
    {
        name:"microsoft",
        employees:[
            {
                id:201,
                name:"ramesh",
                salary:26000,
                isMarried:false,
                age:23,
                gender:"male",
                child:0
            },
            {
                id:202,
                name:"priya",
                salary:35000,
                isMarried:true,
                age:28,
                gender:"female",
                child:1
            },
            {
                id:203,
                name:"ramesh",
                salary:26000,
                isMarried:false,
                age:23,
                gender:"male",
                child:0
            }
        ]
    }
]

console.log(company);

var x = company.find((comp)=> comp.name ==="Google").employees.reduce((sum,prod)=> sum + prod.salary,0)
console.log(x);

// var findChild = company.find((comp)=>{
//     return comp.name === "microsoft"
// })

// var x = findChild.employees.filter((emp)=>{
//     return emp.child > 0
// })
// console.log(x);

// var GoogleFeml = company.find((comp)=> comp.name=="Google").employees.filter((emp)=> emp.gender ==="female")
// console.log(GoogleFeml);

// var x = company.map((comp)=> comp.name === "Google".employees.filter((emp)=> emp.gender === "female"))
// console.log(x);




// var x = company.map((comp)=>{
//     return comp.employees.map((emp)=>{
//         return emp.name
//     })
// })
// console.log(x);

// var x = company.map((comp)=> comp.employees.map((emp)=> emp.name))
// console.log(x);
