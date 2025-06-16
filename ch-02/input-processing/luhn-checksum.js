let digit, num = ""; 
let checkSum = 0;
while(digit !== "") {
    digit = prompt("enter digit");
    num += digit;   
} 
console.log(num); 

if (num.length % 2 == 0) { 
    evenCheckSum(num);
}
else {
    oddCheckSum(num);
}

function evenCheckSum(num) {
    for (let pos = 0; pos < num.length; pos++)
        if (pos % 2 == 1) {
            checkSum += doubler(num.slice(pos, pos + 1))
        }
        else {
            checkSum += num.slice(pos, pos + 1)
        }
} 

function oddCheckSum(num) {
    for (let pos = 0; pos < num.length; pos++)
        if (pos % 2 == 0) {
            checkSum += doubler(num.slice(pos, pos + 1))
        }
        else {
            checkSum += num.slice(pos, pos + 1)
        }
}

console.log(checkSum);