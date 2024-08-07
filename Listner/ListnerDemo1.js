var x = document.getElementById("btn")

x.addEventListener("click",()=>{
    // alert("Button Clicked!")
    console.log("Button Clicked!");
    
})
x.addEventListener("dblclick",()=>{
    document.body.style.backgroundColor = "red"
})
x.addEventListener("mouseenter",()=>{
    x.style.backgroundColor = "black"
    x.style.color = "white"
})