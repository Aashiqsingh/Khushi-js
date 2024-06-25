const jpgHandler = (option)=>{

    return option.name + " file with size " + option.size
}

const pngHandler = (option)=>{

    return option.name + "file with size " + option.size
}

const pdfHandler = (option)=>{

    return option.name + " file with size " + option.size 
}

// const handler= (cb , fname)=>{

//     return cb({name: fname , size:"1000kb"})
// }

const handler= (cb , fname)=> cb({name: fname , size:"1000kb"})


var file = "abc.jpg";
var flag;


if(file.endsWith(".jpg")){
    flag = handler(jpgHandler,file)
    
}
else if(file.endsWith(".png")){
    flag = handler(pngHandler,file)
}

else if(file.endsWith(".pdf")){
    flag = handler(pdfHandler,file)
    
}

console.log(flag);