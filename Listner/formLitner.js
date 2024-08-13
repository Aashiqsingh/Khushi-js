var btn = document.getElementById("submit")
btn.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("form submitted..");

    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var age = document.getElementById("age")
    // console.log(name.value);
    // console.log(email.value);
    // console.log(age.value);

    var user = {
        name:name.value,
        email:email.value,
        age:age.value
    }
    console.log(user);

    const result = JSON.stringify(user)

    var output = document.getElementById("output");
    output.innerHTML = result
    
    console.log(result[0]); 
    
    
    
})