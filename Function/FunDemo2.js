function goa(amt){

    return "Goa tour "+amt+ " rupees"
}

function singapore(amt){
    return "Singapore tour "+amt+ " ruppes"
}

function lasvegas(amt){

    return "Las Vegas tour "+amt + "rupees"
}

var budget = 567;

if(budget > 3000){

    let x = lasvegas(budget)
    console.log(x);
}
else if(budget > 1500){
    let x = singapore(budget)
    console.log(x);
}
else if(budget > 500){
    console.log(goa(budget));
}
else{
    console.log("You need to improve your budget");
}
