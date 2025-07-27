let original = prompt("Choose an option number for your number system: 1. Decimal 2. Binary 3. Hexadecimal");
let num = prompt("Enter your number: ");
let deci_convert = "";
let bin_convert = "";
let hex_convert = "";
let converted = "";
let testNum = 0;

if(original === "1") {
    deci_convert = prompt("Choose an option for conversion: A. Decimal -> Binary  B. Decimal -> Hexadecimal");
}

else if(original === "2") {
    bin_convert = prompt("Choose an option for conversion: A. Binary -> Decimal  B. Binary -> Hexadecimal");
}

else if(original === "3") {
    hex_convert = prompt("Choose an option for conversion: C. Hexadecimal -> Binary  B. Hexadecimal -> Decimal");
}

if (deci_convert === 'A' || deci_convert === 'a') {

testNum = num;
console.log(testNum);

    for(let exp = 16; exp >= 0; exp--) {
    if(testNum - Math.pow(2, exp) < 0) {
        converted += '0';

    }
    else {
        converted += '1';
        testNum -= Math.pow(2, exp)
    }

    }   
console.log(converted);
}

