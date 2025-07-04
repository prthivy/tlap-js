//goal: binary to decimal
let binary = "";
let digits = "";
let decimal = 0;

binary = prompt("enter binary"); //e.g. 1011010

digits = binary.length; //7

for(pos = 1; pos <= binary.length; pos++) {
    if(binary.charAt(pos - 1) === "1") {
        decimal = +decimal;
        decimal += Math.pow(2, (digits - pos));
    } 
    else {
        decimal = +decimal;
        decimal += 0;
    }
}

console.log(decimal);