var btn = document.getElementById("btn");
var mydiv = document.getElementById("mydiv");
btn.addEventListener("click",()=>{

    var nameLable = document.createElement("label");
    nameLable.innerHTML = "Name: ";
    var nameInput = document.createElement("input");
    nameInput.type = "text";

    var emailLable = document.createElement("label");
    emailLable.innerHTML = "Email: ";
    var emailInput = document.createElement("input");
    emailInput.type = "email";

    var btn = document.createElement("button")
    btn.innerHTML = "Submit";
    btn.addEventListener("click",()=>{
        console.log(nameInput.value);
        console.log(emailInput.value);
        
        
    })

    mydiv.appendChild(nameLable);
    mydiv.appendChild(nameInput);
    mydiv.appendChild(emailLable);
    mydiv.appendChild(emailInput);
    mydiv.appendChild(btn);

})