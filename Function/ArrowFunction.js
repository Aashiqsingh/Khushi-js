// function add(a,b){


//     return a+b;
// }

// var x = add(10,20)
// console.log(x);

// const add = (a,b)=>{
//     return a+b;
// }

// var x = add(10,200)
// console.log(x);


const science = (name,per)=>{

    return name+" select in science stream bcoz your percentage is "+per
}

const commerce = (name,per)=>{

    console.log(name + " select in commerce stream bcoz your percentage is "+per);
}

const arts = (name,per)=>{

    console.log(name + " select in art stream bcoz your percentage is "+per);
}


var per = 59;

if(per > 85){

    let x = science("rahul",per)
    console.log(x);
}
else if(per > 55){
    commerce("rahul",per)
}
else if(per > 35){
    arts("rahul",per)
}
else{
    console.log("You need to improve your self...");
}