
// for(let i=0;i<lang.length;i++){
//     console.log(lang[i]);
// }


// lang.forEach((l)=>{
//     console.log(l);
// })



// map --> it will new array with same length 

// lang = lang.map((l)=>{
//     return l.toUpperCase()
// })

// console.log(lang);


// filter --> it will new array with modified data 


// var langName = "marathi"
// lang = lang.filter((l)=>{
//     return l.length <= 5
// })

// console.log(lang);


// lang = lang.filter((l)=>{

//     // english != urdu
//     // urdu != urdu
//     return l!= langName
// })
// console.log(lang);



// lang.push("sanskrit")

// console.log(lang);

// lang.splice(2,1,"sanskrit")

// console.log(lang);

var langs = ["english","marathi","hindi","urdu","gujarati","french"]





// const userDelete = (langName)=>{

//     langs = langs.filter((l)=>{

//         return l!= langName
//     })

//     return langs

// }

// const userDelete = (langName)=>{
    
//     return langs.filter((l)=> l!= langName)
    
    
// }


const userDelete = (langName)=> langs.filter((l)=> l!=langName) 

var x = userDelete("french")
console.log(x);