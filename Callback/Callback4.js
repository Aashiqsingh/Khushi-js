const wordhandler = (fname)=>{

    console.log("wordhandler called "+fname);
}

const pngHandler = (fname)=>{
    console.log("pngHandler called "+fname);
}

const jpgHandler = (fname)=>{
    console.log("jpgHandler called "+fname);
    
}

const Handler = (cb,data)=>{

    cb(data);
}

var file = "xyz.png";

if(file.endsWith(".png")){
    Handler(pngHandler,file)
}
else if(file.endsWith(".jpg")){
    Handler(jpgHandler,file)
}
else if(file.endsWith(".word")){
    Handler(wordhandler,file)
}