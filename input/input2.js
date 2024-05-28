// var a = parseInt(prompt("Enter First number :-"));
// var b = parseInt(prompt("Enter second number :-"));


// var x = parseInt(prompt("1 for addition \n 2 for subtraction \n 3 for multiplicaton \n 4 for division \n\n\n\n\n Enter your choice :-"))

var a = prompt("Enter first number :-")
var b = prompt("Enter second number :-")

var x = prompt("+ for addition \n - for subtraction \n * for multiplicaton \n / for division \n\n\n\n\n Enter your choice :-")


switch(x){
    case '+':
        alert("Addition = "+(parseInt(a)+parseInt(b)))
        break
    
    case '-':
        alert("Subtraction = "+(a-b))
        break

    case '*':
        alert("Multiplication = "+(a*b))
        break

    case '/':
        alert("Division = "+(a/b))
        break

    default:
        alert("Invalid Choice")
}