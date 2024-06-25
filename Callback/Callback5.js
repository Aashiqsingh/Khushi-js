const jpgHandler = (option)=>{

    return option.name + ".jpg file"
}

const pngHandler = (option)=>{

    return option.name + ".png file"
}

const pdfHandler = (option)=>{

    return option.name + " file with size " + option.size 
}

const handler= (cb , fname)=>{

    var x = cb({name:fname,size:"1000kb"})
    console.log(x);
}

var file = "abc.pdf";

if(file.endsWith(".jpg")){
    handler(jpgHandler,file)
}
else if(file.endsWith(".png")){
    handler(pngHandler,file)
}

else if(file.endsWith(".pdf")){
    handler(pdfHandler,file)
}