var prev = document.getElementById("prev")

var images = ["img1.jpg","img2.avif","img3.jpg","img5.avif"]

var image = document.getElementById("image")

var currentIndex = 0;
prev.addEventListener("click",()=>{

    //                (3 - 1 + 4) % 4 = 2
    currentIndex = (currentIndex - 1 + images.length)%images.length;
    // console.log(currentIndex);
    var path = "../Images/"+images[currentIndex]
    image.src = path
    
})

var next = document.getElementById("next")
next.addEventListener("click",()=>{

    //                 1 + 1 % 4
    currentIndex = (currentIndex + 1)%images.length 
    var path = "../Images/"+images[currentIndex]

    image.src = path
})

