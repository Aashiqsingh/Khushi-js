var btn = document.getElementById("btn");

// var err = ["khushi@gmail.com","aashiq@gmail.com","dev@gmail.com"]
var pushArr = []

btn.addEventListener("submit",(event)=>{
    event.preventDefault();


    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var mobile = document.getElementById("mobile")
    var age = document.getElementById("age")

    var nameErr = document.getElementById("nameErr")
    var mobileErr = document.getElementById("mobileErr")
    var emailErr = document.getElementById("emailErr")

    var mobileRegex = /[6-9]{1}[0-9]{9}$/;
    var userNameRegex = /[A-Za-z]+[0-9]+/;
    const regex = /^[a-zA-Z0-9_]+@[a-z.]+\.[a-z]+$/;

    
    pushArr = pushArr.push(email.value)

    if(pushArr.includes(email.value)){
        emailErr.innerHTML = "Email already exists"
    }
    else{
        emailErr.innerHTML = ""
    }
    // if(email.value.match(regex)){
    //     emailErr.innerHTML = ""
    // }
    
    // else{
    //     emailErr.innerHTML = "Invalid email address"
    // }

    // if(err.includes(email.value)){
    //     emailErr.innerHTML = "Email already exists"
        
    // }else{
    //     emailErr.innerHTML = ""
    // }


    // if(name.value.length < 3){
    //     nameErr.innerHTML = "name must be at least 3 characters"
    // }

    // if(name.value.match(userNameRegex)){
    //     nameErr.innerHTML = ""
    // }
    // else{
    //     nameErr.innerHTML = "Invalid name"
    // }


    // if(mobile.value.match(mobileRegex)){
    //     mobileErr.innerHTML = ""
    // }
    // else{
    //     mobileErr.innerHTML = "Invalid mobile number"
    // }




    // console.log("name = ",name.value);
    // console.log("email = ",email.value);
    // console.log("mobile = ",mobile.value);
    // console.log("age = ",age.value);
    
})