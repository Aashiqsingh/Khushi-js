function changeTxt(){
    var output = document.getElementById('output').value
    console.log(output);

    var ans = document.getElementById("ans")

    if(output.length <= 3){
        // alert("name is too short")
        ans.innerHTML = "name is too short"
        ans.style.color = "red"
    }
    else{
        ans.innerHTML = ""
    }
}