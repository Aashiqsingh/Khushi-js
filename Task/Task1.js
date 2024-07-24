
// function changeClr(){
//     var colors = ["black", "blue","green","yellow","skyblue","red","violet"]


//     var random = Math.floor(Math.random() * colors.length)
//     // console.log(random);

//     var mydiv = document.getElementById("mydiv")
//     mydiv.style.backgroundColor = colors[random]
// }

var images = ["img1.jpg","img2.avif","img3.jpg","img5.avif"]

function changeClr(){

    var random = Math.floor(Math.random() * images.length)
    var mydiv = document.getElementById("mydiv")


    var path = "../Images/"+images[random]

    mydiv.src = path
}