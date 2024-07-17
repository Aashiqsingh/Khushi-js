var students = [
    {
        id:101,
        name:"khushi",
        age:22,
        email:"khushi@gmail.com",
        country: "india"
    },
    {
        id:102,
        name:"ramesh",
        age:21,
        email:"ramesh@gmail.com",
        country: "usa"
    },
    {
        id:103,
        name:"nency",
        age:23,
        email:"nency@gmail.com",
        country: "canada"
    }
]

// console.log(students[0]);

// for(let i=0;i<students.length;i++){
//     console.log(students[i]);
// }

// forEach : it will no return 
// map: it will return new array with same length 
// filter : it will return new array with modified data


// students.forEach((stu)=>{
//     console.log(stu.name);
// })


// students = students.map((stu)=>{

//     return stu.name
// })
// console.log(students);


students = students.map((stu)=>{

    return ({
        id:stu.id,
        name:stu.name.toUpperCase(),
        age:stu.age + 5,
        email:stu.email.toLowerCase(),
        country: stu.country,
        isAlive: true,
    })
})

console.log(students);




// console.log(students);

// for(let i =0;i<students.length;i++){
//     console.log(students[i]);
// }

// students.forEach((stu)=> {
//     console.log(stu.name);
// })

// students = students.map((stu)=>{

//     return stu.name
// })

// console.log(students);

// students = students.map((stu)=>{

//     return ({
//         id:stu.id,
//         name:stu.name.toUpperCase(),
//         age:stu.age,
//         email:stu.email.toLowerCase(),
//         country: stu.country,
//         isAlive: true,
//     })
// })

// console.log(students);