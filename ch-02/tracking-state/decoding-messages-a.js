//goal: extract individual chars from an i/p stream of comma delimited chars

let stream, encodedDigits = "";
let pos = 0;

stream = prompt("enter coded message") //17, 324, 8605, 99999

while (stream.slice(pos, pos + 1) !== ',' && stream.slice(pos, pos+1) !== "") {
    encodedDigits +=  stream.slice(pos, pos+1); 
    pos++; //
} 

console.log(encodedDigits); //t1
pos = pos + 2; 



while (stream.slice(pos, pos+1) !== ',' && stream.slice(pos, pos+1) !== "") {
    encodedDigits +=  stream.slice(pos, pos+1); 
    pos++; //
} 

console.log(encodedDigits); 

//tracex 1: 
//pos = 0
//TRUE, slice(0,1)
//"" + "1"
//pos = 1
//TRUE, slice(1,2)
//"1" + "7"
//pos = 2
//FALSE. 
    