var btn = document.getElementById("btn");
var body = document.getElementById("body");
btn.addEventListener("click",()=>{

    var ans = document.createElement("p")
    ans.innerHTML = "Hello World";
    // ans.align = "center";
    ans.setAttribute("align","center")

    var btn2 = document.createElement("button");
    btn2.innerHTML = "Register";
    btn2.addEventListener("click",()=>{
        alert("Don,t click me!!");
    })

    body.appendChild(ans)
    body.appendChild(btn2)
    
})

