var btn = document.getElementById("btn");
var mydiv = document.getElementById("mydiv");
btn.addEventListener("click",()=>{

    var form = document.createElement("form");
    var nameLbl = document.createElement("label")
    nameLbl.innerHTML = "Name: ";
    var nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Enter your name";

    var nameErr = document.createElement("span");


    var emailLbl = document.createElement("label")
    emailLbl.innerHTML = "Email: ";
    var emailInput = document.createElement("input");


    // emailInput.type = "email";
    emailInput.setAttribute("type","email");
    emailInput.setAttribute("placeholder","please enter a valid email");

    var submitbtn = document.createElement("input");
    submitbtn.type = "submit";
    submitbtn.addEventListener("click",(event)=>{
        event.preventDefault();
        // console.log("Name = ",nameInput.value);
        // console.log("Email = ",emailInput.value);

        if(nameInput.value.length < 5)
        {
            nameErr.innerHTML = "*Name should be minimum 6 characters";
            nameErr.style.color = "red";
        }
        
    })



    mydiv.appendChild(form);
    form.appendChild(nameLbl);
    form.appendChild(nameInput);
    form.appendChild(nameErr);
    
    form.appendChild(document.createElement("br"));
    form.appendChild(emailLbl);
    form.appendChild(emailInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));

    form.appendChild(submitbtn);
    
})