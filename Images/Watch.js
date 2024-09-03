var hours = 0;
var minutes = 0;
var seconds = 0;


var hour = document.getElementById('hour');
var min = document.getElementById('min');
var sec = document.getElementById('sec');


const start2 = ()=>{
    seconds++;
    if(seconds > 60){
        seconds = 0;
        minutes++;
    }
    else if(minutes > 60){
        minutes = 0;
        hours++;
    }

    hour.innerHTML = hours < 10 ? "0"+hours : ""+hours;
    min.innerHTML = minutes < 10 ? "0"+minutes : ""+minutes;
    sec.innerHTML = seconds < 10 ? "0"+seconds : ""+seconds;


}

var x;
const start = ()=>{
    x = setInterval(() => {
        start2();
    }, 1000);
}


const stop = ()=>{
    clearInterval(x)
}

const reset = ()=>{
    clearInterval(x);

    hours = 0;
    minutes = 0;
    seconds = 0;

    hour.innerHTML = "00";
    min.innerHTML = "00";
    sec.innerHTML = "00";
 
}