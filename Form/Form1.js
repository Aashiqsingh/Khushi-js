function submitHandler(e){

    e.preventDefault(); // prevent form submission
    // alert("form is submitted")
    // console.log("form is submitted");
    var fname = document.getElementById("fname")
    var name = document.getElementById("name");
    var femail = document.getElementById("femail")
    // console.log(name.value);
    fname.innerHTML = name.value
    fname.align = "center"
    
    var email = document.getElementById("email");
    // console.log(email.value);
    femail.innerHTML = email.value



}