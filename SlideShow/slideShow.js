var images = ["img1.jpg","img2.avif","img3.jpg","img5.avif"]
var currentIndex = 0;

const prev = document.getElementById("prev");
var image = document.getElementById("image")
prev.addEventListener("click",()=>{

    //                  (0 - 1 + 4)%4
    //                   2 -1 + 4 % 4
    //                   3 - 1 + 4 % 4

    currentIndex = (currentIndex - 1 + images.length)% images.length;
    // console.log(currentIndex);

    var path = "../Images/"+images[currentIndex]
    
    image.src = path;
})

const next = document.getElementById("next");
next.addEventListener("click",()=>{
    //               1 + 1 % 4
    currentIndex = (currentIndex + 1) % images.length
    var path = "../Images/"+images[currentIndex]
    
    image.src = path
})