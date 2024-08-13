var box = document.getElementsByClassName("box")

box[0].addEventListener("mouseenter", () => {
    box[1].innerHTML = "<h1>Hello world</h1>"
    box[1].style.textAlign = "center"
    box[1].style.lineHeight = "150px"
})

box[1].addEventListener("mousemove",()=>{

    var colors = ["red", "green", "blue", "yellow", "orange","black","aqua"]
    // var randomColor = Math.floor(Math.random() * colors.length)
    // box[2].style.backgroundColor = colors[randomColor]


    var random = Math.floor(Math.random() * 100000)
    console.log(random);
    
})