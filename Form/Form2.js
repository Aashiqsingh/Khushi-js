function submitHandler(event){

    event.preventDefault(); // prevent form from submitting normally

     var name = document.getElementById("name")
    console.log(name.value);


    var gender = document.getElementsByName("Gender")
    var gen;

    if(gender[0].checked === true){

        gen = "Male"
    }
    else if(gender[1].checked === true){
        gen = "Female"
    }
    else if(gender[2].checked === true){
        gen = "Other"
    }
r
    var age = document.getElementById("age")
    console.log(age.value);


    if(gen === "Male"){
        if(age.value > 18){
            console.log("You are eligible");
            
        }
        else{
            console.log("You are not eligible");
        }
    }
    else if(gen === "Female"){
        if(age.value > 22){
            console.log("You are eligible");
        }
        else{
            console.log("You are not eligible");
        }
    }
    else if(gen === "Other"){
        if(age.value > 25){
            console.log("You are eligible");
        }
        else{
            console.log("You are not eligible");
        }
    }

    


    
}