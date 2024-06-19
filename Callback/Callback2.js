const science = (name , per)=>{


    return name + " u are selected in science stream with % "+per
}

const commerce = (name , per)=>{

    return name + " u are selected in commerce stream with % "+per
    
}

const arts = (name , per)=>{

    return name + " u are selected in arts stream with % "+per

}

// cb -- callback
const addmission = (cb , stname , per)=>{


    var x = cb(stname , per);
    console.log(x);
}

var per = 67;
var fname = "rahul"

if(per > 85){

    addmission(science,fname,per);
}
else if(per > 65){
    addmission(commerce,fname,per);
}
else if(per > 50){
    addmission(arts,fname,per);
}
else{
    console.log("you need max marks bro....");
}