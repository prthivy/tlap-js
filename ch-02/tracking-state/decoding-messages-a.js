//goal: extract individual chars from an i/p stream of comma delimited chars

let stream, encodedDigits = "";
let pos = 0;

stream = prompt("enter coded message") //17, 324, 8605, 99999

//while (stream.charAt(pos, pos + 1) !== "" && stream.charAt(pos + 1, pos + 2) !== "") {
while (pos < stream.length) { //tysm claude <3
while (stream.charAt(pos) !== ',' && stream.charAt(pos) !== "") {
    encodedDigits +=  stream.slice(pos, pos + 1); 
    pos++; 
} 

console.log(encodedDigits); //t1
encodedDigits = ""
pos = pos + 2; 

}

//tracex 1: 17, 256
//stream.length = 
//pos = 0
//TRUE, charAt(0)
//"" + "1"
//pos = 1
//TRUE, charAt(1)
//"1" + "7"
//pos = 2
//FALSE. 
//decoding logic
//pos = 4
//TRUE, charAt(4)
//"" + "2"
//pos = 5
//TRUE, charAt(5)
//"2" + "5"
//TRUE, charAt(6)
//"25" + "6"
//FALSE
//pos = 8 
    