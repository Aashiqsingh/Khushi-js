// var x = document.getElementById("txt").innerHTML = "Hello world"
// console.log(x);

function changeText() {

    var x = document.getElementById("txt")
    x.innerHTML = "Hello world";
    x.style.backgroundColor = "blue"
    x.style.color = "white"
}

function changeHref() {

    var myLink = document.getElementById("myLink")
    myLink.href = "https://www.netflix.com"
    myLink.innerHTML = "Netflix"
    myLink.target = "_blank"

}

var sum = 0;
function changeClr(){

    console.log(sum++);
}