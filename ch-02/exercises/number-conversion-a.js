let inputDecimal = "";
let remainder = "";
let exponent = 31;
let binary = "";

inputDecimal = prompt("enter decimal:");
// console.log(inputDecimal);

remainder = inputDecimal;

while(remainder !== 0) {
    if(remainder - Math.pow(2, exponent) >= 0) {
        binary += "1"; 
        remainder -= Math.pow(2, exponent);
        exponent--;
    }
    else {
        binary += "0";
        exponent--;
    }
}

//appends remaining 0s once rem is 0
while(binary.length < 32) { 
    binary += "0";
}

console.log(binary);