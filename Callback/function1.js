

function Demo(){
    console.log("Demo function called");
}


function add(x){
    // console.log(x);

    x();

}


// add(10) // 10
// add(true) // true
// add("rahul")//rahul
// add(1.34)//

add(Demo)