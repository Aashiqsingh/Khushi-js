function textCall(){


    // alert("Onclick function called")

    var output = document.getElementById("output")
    output.style.backgroundColor = "red"
    output.style.color = "white"
}

function zommIn(){
    var image = document.getElementById("image")
    image.height = 400;
    image.width = 400;
}

function zoomOut(){
    var image = document.getElementById("image")
    image.height = 250;
    image.width = 250;
}

function changeClr(){
    var myDiv = document.getElementById("myDiv");
    myDiv.style.backgroundColor = "red";
}

function changeClr2(){
    var myDiv = document.getElementById("myDiv");
    myDiv.style.backgroundColor = "blue";

}