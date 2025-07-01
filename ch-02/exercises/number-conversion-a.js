let inputDecimal = "";
let binary = "";
let power = 31; 
let remainder = "";

inputDecimal = prompt("enter a decimal number"); // (this is browser version of the code)
// inputDecimal = 65537; //this is terminal version of the code
console.log(inputDecimal);
remainder = inputDecimal;

while(remainder !== 0) {
    if(remainder - Math.pow(2, power) < 0) {
        binary += 0;
        power--;
    }

    else {
        binary += 1;
        remainder -= Math.pow(2, power);
        power--;
    }   
}

while(binary.length < 32) {
    binary += "0";
}

console.log(binary);