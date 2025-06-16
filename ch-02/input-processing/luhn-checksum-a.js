//goal: collect the digits and concatenates them to form the number

// let digit, number = 0; 
// digit = prompt("enter digit");
// number += digit; 
// console.log(number);


//there's an issue here: if you declare digit as nothing, or 0, 
//the number string concatenates undefined or 0<digit>; 
//to fix that, lets initialize both to blank space. 

// let digit, number = ""; 
// digit = prompt("enter digit");
// number += digit; 
// console.log(number);


//wrap around a conditional that runs until null is recieved 
//= (ok button pressed w/o entering digit)

let digit, number = ""; 
while(digit !== "") {
    digit = prompt("enter digit");
    number += digit;   
} 
console.log(number); 

