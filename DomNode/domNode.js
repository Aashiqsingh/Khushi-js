var employees = [
    {
        id:1,
        name:"tirth",
        email:"tirth@gmail.com",
        age:25,
        department:"HR",
        salary:60000
    },
    {
        id:2,
        name:"nency",
        email:"nency@gmail.com",
        age:28,
        department:"Finance",
        salary:70000
    },
    {   
        id:3,
        name:"ramesh",
        email:"ramesh@gmail.com",
        age:32,
        department:"IT",
        salary:80000
    },
    {
        id:4,
        name:"khushi",
        email:"khushi@gmail.com",
        age:27,
        department:"HR",
        salary:65000
    },
    {
        id:5,
        name:"harsh",
        email:"harsh@gmail.com",
        age:35,
        department:"Finance",
        salary:75000
    }
]


const getdata = ()=>{

    var output = document.getElementById("output");


    setTimeout(()=>{

    for(let i=0;i<employees.length;i++)
    {
        let tr = document.createElement("tr")
        let tdId = document.createElement("td")
        let tdName = document.createElement("td")
        let tdEmail = document.createElement("td")
        let tdAge = document.createElement("td")
        let tdDepartment = document.createElement("td")
        let tdSalary = document.createElement("td")

        tdId.innerHTML = employees[i].id
        tdName.innerHTML = employees[i].name
        tdEmail.innerHTML = employees[i].email
        tdAge.innerHTML = employees[i].age
        tdDepartment.innerHTML = employees[i].department
        tdSalary.innerHTML = employees[i].salary


        output.appendChild(tr)
        tr.appendChild(tdId)
        tr.appendChild(tdName)
        tr.appendChild(tdEmail)
        tr.appendChild(tdAge)
        tr.appendChild(tdDepartment)
        tr.appendChild(tdSalary)


    }

},3000)

}