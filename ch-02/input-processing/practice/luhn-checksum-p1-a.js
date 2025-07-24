//browser
checkSum = 0; 
evenCheckSum = 0;
oddCheckSum = 0;
let pos = 1;

function doubler(doubled) {
    doubled *= 2;
    if (doubled > 9) {
        doubled = 1 + doubled % 10;
        return doubled;   
    }
    else {
        return doubled;
    }
}

let digit = prompt("Enter digit: ");

while(digit !== "" && digit !== null) { 
    if(pos % 2 === 1) {
        evenCheckSum += doubler(digit);
        oddCheckSum += +digit;

        console.log(evenCheckSum);
        console.log(oddCheckSum);
    }
    else {
        evenCheckSum += +digit; 
        oddCheckSum += doubler(digit);

        console.log(evenCheckSum);
        console.log(oddCheckSum);
    }
    digit = prompt("Enter digit: ");
    pos++; 
} 
console.log(evenCheckSum);

if((pos - 1) % 2 === 0) {
    checkSum = evenCheckSum;
}

else {
    checkSum = oddCheckSum;
}

if(checkSum % 10 === 0) {
    console.log("valid!");
}
else {
    console.log('invalid..');
}
