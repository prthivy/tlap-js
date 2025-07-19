let hexadecimal = "";
let decimal = "";
let remainder = "";
let exponent = 31;
let intQuotient = "";

decimal = prompt("enter decimal")
console.log(decimal);

remainder = decimal;

while(remainder !== 0) {
    if(remainder - Math.pow(16, exponent) >= 0) {
        intQuotient = Math.floor(remainder/Math.pow(16, exponent));
        remainder -= (Math.pow(16, exponent) * intQuotient);
        console.log(remainder);
        if(intQuotient < 10) {
            hexadecimal += intQuotient;
        }
        else {
            switch (intQuotient) {
            case 10:
                hexadecimal += "A";
                break;
            case 11:
                hexadecimal += "B";
                break;
            case 12: 
                hexadecimal += "C";
                break;
            case 13: 
                hexadecimal += "D";
                break;
            case 14:
                hexadecimal += "E";
                break;
            case 15: 
                hexadecimal += "F";
                break;
            default:
                break;
        }
        exponent--;
    }
}

    else {
        exponent--;
    }

}

console.log(hexadecimal);