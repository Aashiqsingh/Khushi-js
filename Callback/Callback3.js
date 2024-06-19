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


    return cb(stname, per)
}

var per = 87;
var fname = "rahul"

var flag;

if(per > 85){

    flag = addmission(science,fname,per);
    console.log(flag);
}
else if(per > 65){
    flag = addmission(commerce,fname,per);
    console.log(flag);
}
else if(per > 50){
    flag = addmission(arts,fname,per);
    console.log(flag);
}
else{
    console.log("you need max marks bro....");
}