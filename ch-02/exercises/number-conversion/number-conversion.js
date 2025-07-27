let original = prompt("choose an option number for your number system: 1. decimal 2. binary 3. hexadecimal");
let num = prompt("enter your number: ");
let deci_convert = "";
let bin_convert = "";
let hex_convert = "";

if(original === "1") {
    deci_convert = prompt("choose an option for conversion: A. decimal -> binary  B. decimal -> hexadecimal");
}

else if(original === "2") {
    bin_convert = prompt("choose an option for conversion: A. binary -> decimal  B. binary -> hexadecimal");
}

else if(original === "3") {
    hex_convert = prompt("choose an option for conversion: C. hexadecimal -> binary  B. hexadecimal -> decimal");
}

